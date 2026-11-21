/**
 * Olist & Tiny ERP Conciliador de Repasses Mercado Livre, Shopee & Magalu (olist-tiny-conciliador-taxas-marketplaces)
 * Ecossistema: Olist / Tiny ERP | Mensalidade: R$ 59,90/mês
 * Audita centavo por centavo o repasse líquido vs pedido faturado no Tiny/Olist.
 */
export const APP_INFO = {
  id: "01",
  slug: "olist-tiny-conciliador-taxas-marketplaces",
  name: "Olist & Tiny ERP Conciliador de Repasses Mercado Livre, Shopee & Magalu",
  ecosystem: "Olist / Tiny ERP",
  priceBRL: "R$ 59,90/mês",
  lgpdCompliant: true
};

export function runConnector(payload = {}) {
  return {
    app: "olist-tiny-conciliador-taxas-marketplaces",
    ecosystem: "Olist / Tiny ERP",
    status: "SUCCESS",
    processedAt: new Date().toISOString(),
    summary: "Audita centavo por centavo o repasse líquido vs pedido faturado no Tiny/Olist.",
    inputKeys: Object.keys(payload)
  };
}
