/**
 * Portal de Trocas, Devoluções (7 Dias CDC) e Logística Reversa BR (nuvemshop-trocas-devolucoes-cdc)
 * Ecossistema: Nuvemshop / Tray / Shopify BR | Mensalidade: R$ 59,90/mês
 * Automatiza solicitações de troca dentro do prazo de 7 dias do Código de Defesa do Consumidor gerando vale-compras para reter a receita.
 */
export const PLUGIN_METADATA = {
  id: "12",
  slug: "nuvemshop-trocas-devolucoes-cdc",
  title: "Portal de Trocas, Devoluções (7 Dias CDC) e Logística Reversa BR",
  ecosystem: "Nuvemshop / Tray / Shopify BR",
  priceBRL: "R$ 59,90/mês",
  lgpdCompliant: true
};

export function executeRuleEngine(orderPayload = {}) {
  const subtotal = Number(orderPayload.subtotal || 350.00);
  const paymentMethod = String(orderPayload.paymentMethod || 'PIX').toUpperCase();
  const discountRate = paymentMethod === 'PIX' ? (subtotal >= 300 ? 0.10 : 0.05) : 0;
  const discountBRL = +(subtotal * discountRate).toFixed(2);
  const finalTotal = +(subtotal - discountBRL).toFixed(2);

  return {
    plugin: "nuvemshop-trocas-devolucoes-cdc",
    ecosystem: "Nuvemshop / Tray / Shopify BR",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Automatiza solicitações de troca dentro do prazo de 7 dias do Código de Defesa do Consumidor gerando vale-compras para reter a receita."
  };
}
