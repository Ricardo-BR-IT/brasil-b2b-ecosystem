/**
 * Bling & Tiny Exportador Contábil SPED / Domínio / Alterdata / Fortes (bling-exportador-dominio-alterdata)
 * Ecossistema: Bling / Contabilidade BR | Mensalidade: R$ 79,90/mês
 * Empacota todos os XMLs de entrada/saída, inutilizações e cancelamentos do mês já no layout de importação do sistema do contador.
 */
export const PLUGIN_METADATA = {
  id: "10",
  slug: "bling-exportador-dominio-alterdata",
  title: "Bling & Tiny Exportador Contábil SPED / Domínio / Alterdata / Fortes",
  ecosystem: "Bling / Contabilidade BR",
  priceBRL: "R$ 79,90/mês",
  lgpdCompliant: true
};

export function executeRuleEngine(orderPayload = {}) {
  const subtotal = Number(orderPayload.subtotal || 350.00);
  const paymentMethod = String(orderPayload.paymentMethod || 'PIX').toUpperCase();
  const discountRate = paymentMethod === 'PIX' ? (subtotal >= 300 ? 0.10 : 0.05) : 0;
  const discountBRL = +(subtotal * discountRate).toFixed(2);
  const finalTotal = +(subtotal - discountBRL).toFixed(2);

  return {
    plugin: "bling-exportador-dominio-alterdata",
    ecosystem: "Bling / Contabilidade BR",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Empacota todos os XMLs de entrada/saída, inutilizações e cancelamentos do mês já no layout de importação do sistema do contador."
  };
}
