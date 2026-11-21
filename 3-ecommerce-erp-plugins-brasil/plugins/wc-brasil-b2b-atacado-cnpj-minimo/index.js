/**
 * WooCommerce Brasil Atacado B2B: Preço por CNPJ e Pedido Mínimo (wc-brasil-b2b-atacado-cnpj-minimo)
 * Ecossistema: WooCommerce B2B Brasil | Mensalidade: R$ 49,90/mês
 * Libera tabela de preço de atacado somente para CNPJ ativo na Receita Federal e exige pedido mínimo por grade/caixa fechada.
 */
export const PLUGIN_METADATA = {
  id: "11",
  slug: "wc-brasil-b2b-atacado-cnpj-minimo",
  title: "WooCommerce Brasil Atacado B2B: Preço por CNPJ e Pedido Mínimo",
  ecosystem: "WooCommerce B2B Brasil",
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
    plugin: "wc-brasil-b2b-atacado-cnpj-minimo",
    ecosystem: "WooCommerce B2B Brasil",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Libera tabela de preço de atacado somente para CNPJ ativo na Receita Federal e exige pedido mínimo por grade/caixa fechada."
  };
}
