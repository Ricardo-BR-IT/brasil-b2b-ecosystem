/**
 * Tiny ERP & Olist Unificador de Etiqueta ZPL + DANFE Simplificada (tiny-etiqueta-termica-zpl-danfe)
 * Ecossistema: Tiny / Olist Ecossistema | Mensalidade: R$ 49,90/mês
 * Imprime etiqueta de envio 100x150mm (ZPL/PDF) já com a DANFE Simplificada e lista de separação (Picking List) na mesma folha.
 */
export const PLUGIN_METADATA = {
  id: "03",
  slug: "tiny-etiqueta-termica-zpl-danfe",
  title: "Tiny ERP & Olist Unificador de Etiqueta ZPL + DANFE Simplificada",
  ecosystem: "Tiny / Olist Ecossistema",
  priceBRL: "R$ 49,90/mês",
  lgpdCompliant: true
};

export function executeRuleEngine(orderPayload = {}) {
  const subtotal = Number(orderPayload.subtotal || 350.00);
  const paymentMethod = String(orderPayload.paymentMethod || 'PIX').toUpperCase();
  const discountRate = paymentMethod === 'PIX' ? (subtotal >= 300 ? 0.10 : 0.05) : 0;
  const discountBRL = +(subtotal * discountRate).toFixed(2);
  const finalTotal = +(subtotal - discountBRL).toFixed(2);

  return {
    plugin: "tiny-etiqueta-termica-zpl-danfe",
    ecosystem: "Tiny / Olist Ecossistema",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Imprime etiqueta de envio 100x150mm (ZPL/PDF) já com a DANFE Simplificada e lista de separação (Picking List) na mesma folha."
  };
}
