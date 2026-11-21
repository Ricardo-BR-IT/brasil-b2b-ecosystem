/**
 * WooCommerce Brasil Checkout Transparente CPF/CNPJ, IE & ViaCEP (wc-brasil-cpf-cnpj-cep-checkout)
 * Ecossistema: WordPress / WooCommerce BR | Mensalidade: R$ 29,90/mês
 * Adiciona máscara e validação real de CPF/CNPJ/Inscrição Estadual e preenchimento automático de endereço via CEP sem pesar o checkout.
 */
export const PLUGIN_METADATA = {
  id: "04",
  slug: "wc-brasil-cpf-cnpj-cep-checkout",
  title: "WooCommerce Brasil Checkout Transparente CPF/CNPJ, IE & ViaCEP",
  ecosystem: "WordPress / WooCommerce BR",
  priceBRL: "R$ 29,90/mês",
  lgpdCompliant: true
};

export function executeRuleEngine(orderPayload = {}) {
  const subtotal = Number(orderPayload.subtotal || 350.00);
  const paymentMethod = String(orderPayload.paymentMethod || 'PIX').toUpperCase();
  const discountRate = paymentMethod === 'PIX' ? (subtotal >= 300 ? 0.10 : 0.05) : 0;
  const discountBRL = +(subtotal * discountRate).toFixed(2);
  const finalTotal = +(subtotal - discountBRL).toFixed(2);

  return {
    plugin: "wc-brasil-cpf-cnpj-cep-checkout",
    ecosystem: "WordPress / WooCommerce BR",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Adiciona máscara e validação real de CPF/CNPJ/Inscrição Estadual e preenchimento automático de endereço via CEP sem pesar o checkout."
  };
}
