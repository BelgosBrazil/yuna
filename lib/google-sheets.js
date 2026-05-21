/**
 * Envia lead para Google Apps Script (planilha).
 * @param {{ nome: string, email: string, telefone: string, mensagem: string, source?: string }} lead
 */
async function sendLeadToGoogleSheets(lead) {
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
        throw new Error('GOOGLE_SHEETS_WEBHOOK_URL não configurada');
    }

    const mensagem = lead.source
        ? `[${lead.source}] ${lead.mensagem}`
        : lead.mensagem;

    const payload = {
        nome: lead.nome,
        email: lead.email,
        telefone: lead.telefone,
        mensagem,
        enviadoEm: new Date().toISOString()
    };

    const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
    if (secret) {
        payload.secret = secret;
    }

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        redirect: 'follow',
        signal: AbortSignal.timeout(20000)
    });

    const body = await response.text();
    let parsed = null;
    try {
        parsed = JSON.parse(body);
    } catch {
        // Apps Script pode retornar HTML em misconfiguração
    }

    if (!parsed || parsed.success !== true) {
        const hint = parsed?.error
            || (body.includes('Unauthorized') ? 'Unauthorized' : null)
            || `HTTP ${response.status}`;
        throw new Error(hint || 'Não foi possível registrar na planilha');
    }
}

module.exports = { sendLeadToGoogleSheets };
