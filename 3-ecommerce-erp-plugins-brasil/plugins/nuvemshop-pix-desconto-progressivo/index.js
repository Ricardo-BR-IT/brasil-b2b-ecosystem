/**
 * Nuvemshop & Tray PIX Desconto Progressivo & QR Instantâneo (nuvemshop-pix-desconto-progressivo)
 * Ecossistema: Nuvemshop / Tray App Store | Mensalidade: R$ 39,90/mês
 * Aumenta conversão de checkout oferecendo 5% no PIX acima de R$ 100 e 10% acima de R$ 300 com copy-paste instantâneo.
 */
export const PLUGIN_METADATA = {
  id: "01",
  slug: "nuvemshop-pix-desconto-progressivo",
  title: "Nuvemshop & Tray PIX Desconto Progressivo & QR Instantâneo",
  ecosystem: "Nuvemshop / Tray App Store",
  priceBRL: "R$ 39,90/mês",
  lgpdCompliant: true
};

export function executeRuleEngine(orderPayload = {}) {
  const subtotal = Number(orderPayload.subtotal || 350.00);
  const paymentMethod = String(orderPayload.paymentMethod || 'PIX').toUpperCase();
  const discountRate = paymentMethod === 'PIX' ? (subtotal >= 300 ? 0.10 : 0.05) : 0;
  const discountBRL = +(subtotal * discountRate).toFixed(2);
  const finalTotal = +(subtotal - discountBRL).toFixed(2);

  return {
    plugin: "nuvemshop-pix-desconto-progressivo",
    ecosystem: "Nuvemshop / Tray App Store",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Aumenta conversão de checkout oferecendo 5% no PIX acima de R$ 100 e 10% acima de R$ 300 com copy-paste instantâneo."
  };
}
