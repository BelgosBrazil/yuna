/**
 * Servidor local: arquivos estáticos + /api/leads (mesmo handler da Vercel).
 * Carrega .env e .env.local da raiz do projeto.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const ROOT = path.join(__dirname, '..');
const PORT = Number(process.env.PORT || process.argv[2] || 3000);
const OPEN = process.argv[3] || 'medicos.html';

function loadEnvFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eq = trimmed.indexOf('=');
        if (eq === -1) continue;
        const key = trimmed.slice(0, eq).trim();
        let value = trimmed.slice(eq + 1).trim();
        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1);
        }
        if (process.env[key] === undefined) {
            process.env[key] = value;
        }
    }
}

loadEnvFile(path.join(ROOT, '.env'));
loadEnvFile(path.join(ROOT, '.env.local'));

const leadsHandler = require(path.join(ROOT, 'api', 'leads'));

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4',
    '.ico': 'image/x-icon'
};

const REWRITES = new Map([
    ['/medicos', '/medicos.html'],
    ['/pacientes', '/pacientes.html'],
    ['/', '/medicos.html']
]);

function readBody(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', (chunk) => chunks.push(chunk));
        req.on('end', () => resolve(Buffer.concat(chunks)));
        req.on('error', reject);
    });
}

function createMockResponse(res) {
    let statusCode = 200;
    const headers = {};
    return {
        setHeader(key, value) {
            headers[key] = value;
        },
        status(code) {
            statusCode = code;
            return this;
        },
        json(payload) {
            if (!headers['Content-Type']) {
                headers['Content-Type'] = 'application/json';
            }
            res.writeHead(statusCode, headers);
            res.end(JSON.stringify(payload));
        },
        end(body) {
            res.writeHead(statusCode, headers);
            res.end(body);
        }
    };
}

async function handleApi(req, res, pathname) {
    if (pathname !== '/api/leads') {
        return false;
    }

    const bodyBuffer = await readBody(req);
    let body = bodyBuffer.length ? bodyBuffer.toString('utf8') : undefined;
    if (body) {
        try {
            body = JSON.parse(body);
        } catch {
            /* validado no handler */
        }
    }

    const mockReq = {
        method: req.method,
        headers: req.headers,
        body
    };
    const mockRes = createMockResponse(res);
    await leadsHandler(mockReq, mockRes);
    return true;
}

function resolveStaticPath(pathname) {
    let filePath = pathname;
    if (REWRITES.has(filePath)) {
        filePath = REWRITES.get(filePath);
    }
    if (filePath.endsWith('/')) {
        filePath += 'index.html';
    }
    const safePath = path.normalize(filePath).replace(/^(\.\.[/\\])+/, '');
    const absolute = path.join(ROOT, safePath);
    if (!absolute.startsWith(ROOT)) {
        return null;
    }
    return absolute;
}

function serveStatic(res, pathname) {
    const absolute = resolveStaticPath(pathname);
    if (!absolute || !fs.existsSync(absolute) || fs.statSync(absolute).isDirectory()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not Found');
        return;
    }
    const ext = path.extname(absolute).toLowerCase();
    const type = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    fs.createReadStream(absolute).pipe(res);
}

const server = http.createServer(async (req, res) => {
    try {
        const url = new URL(req.url, `http://${req.headers.host}`);

        if (url.pathname.startsWith('/api/')) {
            const handled = await handleApi(req, res, url.pathname);
            if (handled) return;
        }

        if (req.method === 'GET' || req.method === 'HEAD') {
            serveStatic(res, decodeURIComponent(url.pathname));
            return;
        }

        res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Method Not Allowed');
    } catch (err) {
        console.error(err);
        if (!res.headersSent) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Internal Server Error');
        }
    }
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Dev server: http://127.0.0.1:${PORT}/${OPEN}`);
    console.log('API POST /api/leads — variáveis de .env / .env.local');
});
