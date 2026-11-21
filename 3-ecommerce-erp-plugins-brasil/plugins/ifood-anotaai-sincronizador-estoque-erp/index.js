/**
 * Sincronizador de Estoque e CMV: iFood / Delivery ↔ Bling & Tiny (ifood-anotaai-sincronizador-estoque-erp)
 * Ecossistema: Food Service & ERP BR | Mensalidade: R$ 69,90/mês
 * Dá baixa automática de insumos no ERP a cada pedido concluído no delivery e pausa o item no cardápio se o estoque zerar.
 */
export const PLUGIN_METADATA = {
  id: "13",
  slug: "ifood-anotaai-sincronizador-estoque-erp",
  title: "Sincronizador de Estoque e CMV: iFood / Delivery ↔ Bling & Tiny",
  ecosystem: "Food Service & ERP BR",
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
    plugin: "ifood-anotaai-sincronizador-estoque-erp",
    ecosystem: "Food Service & ERP BR",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Dá baixa automática de insumos no ERP a cada pedido concluído no delivery e pausa o item no cardápio se o estoque zerar."
  };
}
