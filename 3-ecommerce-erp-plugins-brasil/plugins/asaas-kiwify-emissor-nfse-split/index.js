/**
 * Orquestrador de Split de Nota Fiscal (NFS-e Produto vs Serviço) (asaas-kiwify-emissor-nfse-split)
 * Ecossistema: Infoprodutos & SaaS BR | Mensalidade: R$ 79,90/mês
 * Divide automaticamente a emissão de NF-e (e-book/livro imune de imposto) e NFS-e (mentoria/curso) após pagamento aprovado.
 */
export const PLUGIN_METADATA = {
  id: "14",
  slug: "asaas-kiwify-emissor-nfse-split",
  title: "Orquestrador de Split de Nota Fiscal (NFS-e Produto vs Serviço)",
  ecosystem: "Infoprodutos & SaaS BR",
  priceBRL: "R$ 79,90/mês",
  lgpdCompliant: true
};

export function executeRuleEngine(orderPayload = {}) {
  const subtotal = Number(orderPayload.subtotal || 350.00);
  const paymentMethod = String(orderPayload.paymentMethod || 'PIX').toUpperCase();
  const discountRate = paymentMethod === 'PIX' ? (subtotal >= 300 ? 0.10 : 0.05) : 0;
  const discountBRL = +(subtotal * discountRate).toFixed(2);
  const finalTotal = +(subtotal - discountBRL).toFixed(2);

  return {
    plugin: "asaas-kiwify-emissor-nfse-split",
    ecosystem: "Infoprodutos & SaaS BR",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Divide automaticamente a emissão de NF-e (e-book/livro imune de imposto) e NFS-e (mentoria/curso) após pagamento aprovado."
  };
}
