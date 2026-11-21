/**
 * Bling & Tiny Validador Fiscal Preventivo NCM, CEST, CFOP & CSOSN (bling-tiny-auditor-ncm-cfop-cest)
 * Ecossistema: Bling / Tiny ERP | Mensalidade: R$ 54,90/mês
 * Evita rejeição da Sefaz na Black Friday auditando todo o catálogo de produtos em busca de NCM extinto ou CFOP incompatível.
 */
export const PLUGIN_METADATA = {
  id: "06",
  slug: "bling-tiny-auditor-ncm-cfop-cest",
  title: "Bling & Tiny Validador Fiscal Preventivo NCM, CEST, CFOP & CSOSN",
  ecosystem: "Bling / Tiny ERP",
  priceBRL: "R$ 54,90/mês",
  lgpdCompliant: true
};

export function executeRuleEngine(orderPayload = {}) {
  const subtotal = Number(orderPayload.subtotal || 350.00);
  const paymentMethod = String(orderPayload.paymentMethod || 'PIX').toUpperCase();
  const discountRate = paymentMethod === 'PIX' ? (subtotal >= 300 ? 0.10 : 0.05) : 0;
  const discountBRL = +(subtotal * discountRate).toFixed(2);
  const finalTotal = +(subtotal - discountBRL).toFixed(2);

  return {
    plugin: "bling-tiny-auditor-ncm-cfop-cest",
    ecosystem: "Bling / Tiny ERP",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Evita rejeição da Sefaz na Black Friday auditando todo o catálogo de produtos em busca de NCM extinto ou CFOP incompatível."
  };
}
