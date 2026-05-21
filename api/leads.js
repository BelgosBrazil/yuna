const { sendLeadToGoogleSheets } = require('../lib/google-sheets');

const VALID_SOURCES = new Set(['medicos', 'pacientes']);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 10 * 1024;

function getAllowedOrigins() {
    const raw = process.env.ALLOWED_ORIGINS || '';
    return raw
        .split(',')
        .map((o) => o.trim())
        .filter(Boolean);
}

function isOriginAllowed(origin, allowedOrigins) {
    if (!origin) return true;
    if (allowedOrigins.length === 0) return true;

    return allowedOrigins.some((allowed) => {
        if (allowed === '*') return true;
        if (allowed.startsWith('*.')) {
            const suffix = allowed.slice(1);
            try {
                const host = new URL(origin).hostname;
                return host.endsWith(suffix) || host === allowed.slice(2);
            } catch {
                return false;
            }
        }
        return origin === allowed;
    });
}

function setCorsHeaders(res, origin, allowedOrigins) {
    if (origin && isOriginAllowed(origin, allowedOrigins)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Vary', 'Origin');
    } else if (allowedOrigins.length === 0) {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function validateLead(body) {
    if (!body || typeof body !== 'object') {
        return 'Corpo da requisição inválido';
    }

    const { nome, email, telefone, mensagem, source } = body;

    if (!nome || typeof nome !== 'string' || !nome.trim()) {
        return 'Nome é obrigatório';
    }
    if (!email || typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
        return 'Email inválido';
    }
    if (!telefone || typeof telefone !== 'string' || !telefone.trim()) {
        return 'Telefone é obrigatório';
    }
    if (!mensagem || typeof mensagem !== 'string' || !mensagem.trim()) {
        return 'Mensagem é obrigatória';
    }
    if (!source || !VALID_SOURCES.has(source)) {
        return 'Origem (source) inválida';
    }

    return null;
}

function normalizeLead(body) {
    return {
        nome: body.nome.trim(),
        email: body.email.trim().toLowerCase(),
        telefone: body.telefone.trim(),
        mensagem: body.mensagem.trim(),
        source: body.source
    };
}

module.exports = async function handler(req, res) {
    const allowedOrigins = getAllowedOrigins();
    const origin = req.headers.origin || '';

    setCorsHeaders(res, origin, allowedOrigins);

    if (req.method === 'OPTIONS') {
        if (origin && !isOriginAllowed(origin, allowedOrigins)) {
            return res.status(403).end();
        }
        return res.status(204).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    if (origin && allowedOrigins.length > 0 && !isOriginAllowed(origin, allowedOrigins)) {
        return res.status(403).json({ error: 'Origem não permitida' });
    }

    const contentLength = parseInt(req.headers['content-length'] || '0', 10);
    if (contentLength > MAX_BODY_BYTES) {
        return res.status(413).json({ error: 'Payload muito grande' });
    }

    let body = req.body;
    if (typeof body === 'string') {
        try {
            body = JSON.parse(body);
        } catch {
            return res.status(400).json({ error: 'JSON inválido' });
        }
    }

    const validationError = validateLead(body);
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    const lead = normalizeLead(body);

    try {
        await sendLeadToGoogleSheets(lead);
        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Google Sheets webhook error:', err);
        return res.status(502).json({
            success: false,
            error: err.message || 'Falha ao registrar na planilha'
        });
    }
};
