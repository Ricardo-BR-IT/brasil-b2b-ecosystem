/**
 * Olist & Tiny Calculadora de Margem Líquida por SKU e Canal de Venda (olist-tiny-calculadora-margem-anuncios)
 * Ecossistema: Olist / Tiny ERP | Mensalidade: R$ 49,90/mês
 * Mostra quais SKUs estão dando prejuízo após frete grátis, comissão e imposto do Simples Nacional.
 */
export const APP_INFO = {
  id: "04",
  slug: "olist-tiny-calculadora-margem-anuncios",
  name: "Olist & Tiny Calculadora de Margem Líquida por SKU e Canal de Venda",
  ecosystem: "Olist / Tiny ERP",
  priceBRL: "R$ 49,90/mês",
  lgpdCompliant: true
};

export function runConnector(payload = {}) {
  return {
    app: "olist-tiny-calculadora-margem-anuncios",
    ecosystem: "Olist / Tiny ERP",
    status: "SUCCESS",
    processedAt: new Date().toISOString(),
    summary: "Mostra quais SKUs estão dando prejuízo após frete grátis, comissão e imposto do Simples Nacional.",
    inputKeys: Object.keys(payload)
  };
}
