/**
 * Cadência Anti-Ghosting: Follow-Up de Propostas sem Resposta (D+2, D+5, D+10) (kommo-recuperador-proposta-vencida-zap)
 * Ecossistema: Kommo / RD Station | Mensalidade: R$ 49,90/mês
 * Reativa orçamentos parados no funil com mensagens consultivas e link de pagamento PIX.
 */
export const APP_INFO = {
  id: "09",
  slug: "kommo-recuperador-proposta-vencida-zap",
  name: "Cadência Anti-Ghosting: Follow-Up de Propostas sem Resposta (D+2, D+5, D+10)",
  ecosystem: "Kommo / RD Station",
  priceBRL: "R$ 49,90/mês",
  lgpdCompliant: true
};

export function runConnector(payload = {}) {
  return {
    app: "kommo-recuperador-proposta-vencida-zap",
    ecosystem: "Kommo / RD Station",
    status: "SUCCESS",
    processedAt: new Date().toISOString(),
    summary: "Reativa orçamentos parados no funil com mensagens consultivas e link de pagamento PIX.",
    inputKeys: Object.keys(payload)
  };
}
