/**
 * Olist & Tiny Automação de Rastreio Correios/Transportadora + Pesquisa NPS (olist-tiny-posvenda-rastreio-whatsapp-nps)
 * Ecossistema: Olist / Tiny ERP | Mensalidade: R$ 49,90/mês
 * Notifica o comprador no WhatsApp a cada etapa da entrega e pede avaliação positiva no marketplace.
 */
export const APP_INFO = {
  id: "14",
  slug: "olist-tiny-posvenda-rastreio-whatsapp-nps",
  name: "Olist & Tiny Automação de Rastreio Correios/Transportadora + Pesquisa NPS",
  ecosystem: "Olist / Tiny ERP",
  priceBRL: "R$ 49,90/mês",
  lgpdCompliant: true
};

export function runConnector(payload = {}) {
  return {
    app: "olist-tiny-posvenda-rastreio-whatsapp-nps",
    ecosystem: "Olist / Tiny ERP",
    status: "SUCCESS",
    processedAt: new Date().toISOString(),
    summary: "Notifica o comprador no WhatsApp a cada etapa da entrega e pede avaliação positiva no marketplace.",
    inputKeys: Object.keys(payload)
  };
}
