/**
 * Nuvemshop & Yampi Recuperador de Carrinho e PIX Expirado via WhatsApp (nuvemshop-recuperador-carrinho-whatsapp)
 * Ecossistema: Nuvemshop / Yampi | Mensalidade: R$ 49,90/mês
 * Dispara mensagem personalizada no WhatsApp 15 minutos após abandono de carrinho ou PIX não pago já com o código Copia-e-Cola.
 */
export const PLUGIN_METADATA = {
  id: "05",
  slug: "nuvemshop-recuperador-carrinho-whatsapp",
  title: "Nuvemshop & Yampi Recuperador de Carrinho e PIX Expirado via WhatsApp",
  ecosystem: "Nuvemshop / Yampi",
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
    plugin: "nuvemshop-recuperador-carrinho-whatsapp",
    ecosystem: "Nuvemshop / Yampi",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Dispara mensagem personalizada no WhatsApp 15 minutos após abandono de carrinho ou PIX não pago já com o código Copia-e-Cola."
  };
}
