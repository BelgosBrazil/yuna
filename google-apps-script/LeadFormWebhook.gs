/**
 * Google Apps Script — cole em Extensões > Apps Script na sua planilha.
 *
 * 1. Cabeçalhos na linha 1: Data | Nome | Email | Telefone | Mensagem
 * 2. Deploy > Nova implantação > App da Web
 *    Executar como: Eu | Quem tem acesso: Qualquer pessoa
 * 3. Copie a URL e defina GOOGLE_SHEETS_WEBHOOK_URL na Vercel (yuna e yuna-v2)
 */
const WEBHOOK_SECRET = "belgos-yuna-v2";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (WEBHOOK_SECRET && data.secret !== WEBHOOK_SECRET) {
      return jsonResponse({ success: false, error: "Unauthorized" }, 403);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      data.enviadoEm ? new Date(data.enviadoEm) : new Date(),
      data.nome || "",
      data.email || "",
      data.telefone || "",
      data.mensagem || "",
    ]);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) }, 500);
  }
}

function doGet() {
  return jsonResponse({ ok: true, message: "Lead webhook ativo" });
}

function jsonResponse(obj, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
  if (statusCode) {
    // ContentService não expõe status HTTP; o cliente valida success no JSON
  }
  return output;
}
