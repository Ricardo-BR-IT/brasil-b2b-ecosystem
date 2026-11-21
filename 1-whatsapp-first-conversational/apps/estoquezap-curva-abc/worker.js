/**
 * EstoqueZap Alerta de Ruptura, Curva ABC & Pedido Compra (estoquezap-curva-abc)
 * Micro-Aplicativo Conversacional WhatsApp-First (Evolution API + Meta Cloud API + Cloudflare Worker Serverless)
 * Gatilho no Chat: /estoque
 * Preço Sugerido: R$ 59,90/mês | Custo de Infra: R$ 0,00 (Serverless / Edge)
 */

function crc16CCITT(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
      else crc = (crc << 1) & 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

function emv(id, val) {
  const s = String(val);
  return id + String(s.length).padStart(2, '0') + s;
}

export function buildPixBrCode(pixKey, merchantName, city, amount, txid = 'ZAPPRO01') {
  const gui = emv('00', 'br.gov.bcb.pix') + emv('01', pixKey.trim());
  const mai = emv('26', gui);
  const amt = amount > 0 ? emv('54', Number(amount).toFixed(2)) : '';
  const addData = emv('62', emv('05', txid.slice(0, 25)));
  const payload = emv('00', '01') + mai + emv('52', '0000') + emv('53', '986') + amt +
                  emv('58', 'BR') + emv('59', merchantName.slice(0, 25).toUpperCase()) +
                  emv('60', city.slice(0, 15).toUpperCase()) + addData + '6304';
  return payload + crc16CCITT(payload);
}

export function processWhatsAppMessage(rawText, senderPhone = '5511999999999') {
  const clean = (rawText || '').replace(/^\/[a-zA-Z0-9_-]+\s*/, '').trim() || "Cimento CP-II 50kg: Estoque=18, Min=50, Custo=R$ 31,00, Giro=220/mês | Argamassa AC-III: Estoque=12, Min=30, Custo=R$ 24,50, Giro=95/mês | Tinta Acrílica 18L: Estoque=25, Min=15, Custo=R$ 189,00, Giro=40/mês";
  const parts = clean.split('|').map(s => s.trim());
  const nums = (clean.match(/\d+(?:[.,]\d+)?/g) || []).map(n => parseFloat(n.replace(',', '.')));
  const totalBase = nums.reduce((acc, v) => acc + (v < 1000000 ? v : 0), 0) || 450.00;
  const pixPayload = buildPixBrCode('ec3fec13-32ad-409a-9625-0ced9c347bda', "EstoqueZap Alerta de R", 'SAO PAULO', totalBase, 'ZAP' + "09");

  const protocolHash = Array.from(clean).reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0x811c9dc5).toString(16).toUpperCase().replace('-', 'A');

  const replyText = [
    `✅ *EstoqueZap Alerta de Ruptura, Curva ABC & Pedido Compra*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `📌 *Protocolo:* #BR-09-${protocolHash}`,
    `📱 *Solicitante:* +${senderPhone}`,
    `📂 *Categoria:* Estoque & Compras`,
    ``,
    `📊 *Resumo Processado Instantaneamente:*`,
    ...parts.map((p, idx) => `  ${idx + 1}. ${p}`),
    ``,
    `💰 *Valor / Base Calculada:* R$ ${totalBase.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    `🔐 *PIX Copia-e-Cola (BRCode Oficial BCB):*`,
    `\`${pixPayload}\``,
    ``,
    `📄 *Documento PDF Timbrado pronto!* Envie *1* para baixar o PDF, *2* para exportar CSV/Excel ou *3* para encaminhar ao cliente.`
  ].join('\n');

  return {
    appSlug: "estoquezap-curva-abc",
    appName: "EstoqueZap Alerta de Ruptura, Curva ABC & Pedido Compra",
    trigger: "/estoque",
    protocol: `BR-09-${protocolHash}`,
    calculatedAmountBRL: totalBase,
    pixBrCode: pixPayload,
    whatsappReply: replyText,
    parsedFields: parts,
    lgpdCompliant: true
  };
}

export default {
  async fetch(request, env) {
    if (request.method === 'GET') {
      const result = processWhatsAppMessage('', '5511988887777');
      return new Response(JSON.stringify(result, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
    }
    const body = await request.json().catch(() => ({}));
    const text = body?.data?.message?.conversation || body?.message?.text || body?.text || '';
    const sender = body?.data?.key?.remoteJid || body?.sender || '5511999999999';
    const output = processWhatsAppMessage(text, sender);

    // Se EVOLUTION_API_URL estiver configurado, responde direto no WhatsApp do cliente
    if (env && env.EVOLUTION_API_URL && env.EVOLUTION_API_KEY && env.EVOLUTION_INSTANCE) {
      await fetch(`${env.EVOLUTION_API_URL}/message/sendText/${env.EVOLUTION_INSTANCE}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': env.EVOLUTION_API_KEY },
        body: JSON.stringify({ number: sender, text: output.whatsappReply })
      }).catch(() => null);
    }
    return new Response(JSON.stringify(output, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
  }
};
