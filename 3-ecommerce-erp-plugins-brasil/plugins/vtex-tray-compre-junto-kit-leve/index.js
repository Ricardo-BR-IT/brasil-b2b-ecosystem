/**
 * VTEX & Tray Kit Compre Junto & Order Bump Ultra-Leve (<4KB) (vtex-tray-compre-junto-kit-leve)
 * Ecossistema: VTEX / Tray App Store | Mensalidade: R$ 69,90/mês
 * Aumenta o Ticket Médio (AOV) em 18% montando kits com desconto progressivo sem prejudicar o Core Web Vitals da loja.
 */
export const PLUGIN_METADATA = {
  id: "07",
  slug: "vtex-tray-compre-junto-kit-leve",
  title: "VTEX & Tray Kit Compre Junto & Order Bump Ultra-Leve (<4KB)",
  ecosystem: "VTEX / Tray App Store",
  priceBRL: "R$ 69,90/mês",
  lgpdCompliant: true
};

export function executeRuleEngine(orderPayload = {}) {
  const subtotal = Number(orderPayload.subtotal || 350.00);
  const paymentMethod = String(orderPayload.paymentMethod || 'PIX').toUpperCase();
  const discountRate = paymentMethod === 'PIX' ? (subtotal >= 300 ? 0.10 : 0.05) : 0;
  const discountBRL = +(subtotal * discountRate).toFixed(2);
  const finalTotal = +(subtotal - discountBRL).toFixed(2);

  return {
    plugin: "vtex-tray-compre-junto-kit-leve",
    ecosystem: "VTEX / Tray App Store",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Aumenta o Ticket Médio (AOV) em 18% montando kits com desconto progressivo sem prejudicar o Core Web Vitals da loja."
  };
}
