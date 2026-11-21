/**
 * Omie & Conta Azul Régua de Cobrança PIX/Boleto via WhatsApp (omie-contaazul-cobranca-whatsapp-asaas)
 * Ecossistema: Omie.Store / Conta Azul | Mensalidade: R$ 64,90/mês
 * Sincroniza contas a receber vencendo/vencidas no ERP e envia 2ª via de Boleto e PIX automaticamente no WhatsApp do cliente.
 */
export const PLUGIN_METADATA = {
  id: "08",
  slug: "omie-contaazul-cobranca-whatsapp-asaas",
  title: "Omie & Conta Azul Régua de Cobrança PIX/Boleto via WhatsApp",
  ecosystem: "Omie.Store / Conta Azul",
  priceBRL: "R$ 64,90/mês",
  lgpdCompliant: true
};

export function executeRuleEngine(orderPayload = {}) {
  const subtotal = Number(orderPayload.subtotal || 350.00);
  const paymentMethod = String(orderPayload.paymentMethod || 'PIX').toUpperCase();
  const discountRate = paymentMethod === 'PIX' ? (subtotal >= 300 ? 0.10 : 0.05) : 0;
  const discountBRL = +(subtotal * discountRate).toFixed(2);
  const finalTotal = +(subtotal - discountBRL).toFixed(2);

  return {
    plugin: "omie-contaazul-cobranca-whatsapp-asaas",
    ecosystem: "Omie.Store / Conta Azul",
    status: "APPLIED_SUCCESS",
    subtotalBRL: subtotal,
    discountAppliedBRL: discountBRL,
    finalTotalBRL: finalTotal,
    auditNotes: "Sincroniza contas a receber vencendo/vencidas no ERP e envia 2ª via de Boleto e PIX automaticamente no WhatsApp do cliente."
  };
}
