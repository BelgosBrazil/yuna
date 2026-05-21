/**
 * Envia lead do formulário para /api/leads (Google Sheets via Apps Script).
 * @param {{ nome: string, email: string, telefone: string, mensagem: string, source: string }} data
 * @returns {Promise<{ ok: boolean, message: string }>}
 */
async function submitLeadForm(data) {
    const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    let result = {};
    try {
        result = await response.json();
    } catch {
        result = {};
    }

    if (response.ok && result.success) {
        return { ok: true, message: 'Solicitação enviada com sucesso.' };
    }

    if (response.status === 503) {
        return {
            ok: false,
            message: result.error || 'Formulário não configurado no servidor. Contate o suporte.'
        };
    }

    if (response.status === 502) {
        return {
            ok: false,
            message: result.error || 'Erro ao enviar para a planilha. Tente novamente.'
        };
    }

    if (response.status === 400) {
        return { ok: false, message: result.error || 'Dados inválidos. Verifique os campos.' };
    }

    if (response.status === 403) {
        return { ok: false, message: 'Origem não autorizada. Tente novamente mais tarde.' };
    }

    if (response.status === 405) {
        return {
            ok: false,
            message: 'API indisponível. Use "npm run dev" (não live-server) para testar o formulário.'
        };
    }

    return { ok: false, message: result.error || 'Erro ao enviar. Tente novamente.' };
}
