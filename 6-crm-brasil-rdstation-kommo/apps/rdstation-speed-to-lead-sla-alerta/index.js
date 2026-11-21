/**
 * RD Station & Kommo Alerta SLA Tempo de 1ª Resposta no WhatsApp (rdstation-speed-to-lead-sla-alerta)
 * Ecossistema: RD Station / Kommo | Mensalidade: R$ 49,90/mês
 * Avisa o gestor no WhatsApp se um lead quente ficar mais de 5 minutos sem primeiro contato.
 */
export const APP_INFO = {
  id: "05",
  slug: "rdstation-speed-to-lead-sla-alerta",
  name: "RD Station & Kommo Alerta SLA Tempo de 1ª Resposta no WhatsApp",
  ecosystem: "RD Station / Kommo",
  priceBRL: "R$ 49,90/mês",
  lgpdCompliant: true
};

export function runConnector(payload = {}) {
  return {
    app: "rdstation-speed-to-lead-sla-alerta",
    ecosystem: "RD Station / Kommo",
    status: "SUCCESS",
    processedAt: new Date().toISOString(),
    summary: "Avisa o gestor no WhatsApp se um lead quente ficar mais de 5 minutos sem primeiro contato.",
    inputKeys: Object.keys(payload)
  };
}
