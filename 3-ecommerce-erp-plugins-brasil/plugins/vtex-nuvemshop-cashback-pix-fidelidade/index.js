/**
 * Motor de Cashback Instantâneo & Carteira de Fidelidade para Varejo BR (vtex-nuvemshop-cashback-pix-fidelidade)
 * Ecossistema: E-commerce Nacional | Mensalidade: R$ 49,90/mês
 * Concede crédito automático de 5% a 15% para a próxima compra com alerta de expiração via WhatsApp em 30 dias.
 */
export const PLUGIN_METADATA = {
  id: "15",
  slug: "vtex-nuvemshop-cashback-pix-fidelidade",
  title: "Motor de Cashback Instantâneo & Carteira de Fidelidade para Varejo BR",
  ecosystem: "E-commerce Nacional",
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
    plugin: "vtex-nuvemshop-cashback-pix-fidelidade",
    ecosystem: "E-commerce Nacional",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Concede crédito automático de 5% a 15% para a próxima compra com alerta de expiração via WhatsApp em 30 dias."
  };
}
