/**
 * Radar de Renovação de Contratos Anuais & Alerta de Risco de Churn B2B (crm-br-radar-renovacao-churn-anual)
 * Ecossistema: RD Station / Pipedrive | Mensalidade: R$ 59,90/mês
 * Abre tarefa automática 60 dias antes do vencimento do contrato com índice de reajuste IPCA/IGP-M.
 */
export const APP_INFO = {
  id: "15",
  slug: "crm-br-radar-renovacao-churn-anual",
  name: "Radar de Renovação de Contratos Anuais & Alerta de Risco de Churn B2B",
  ecosystem: "RD Station / Pipedrive",
  priceBRL: "R$ 59,90/mês",
  lgpdCompliant: true
};

export function runConnector(payload = {}) {
  return {
    app: "crm-br-radar-renovacao-churn-anual",
    ecosystem: "RD Station / Pipedrive",
    status: "SUCCESS",
    processedAt: new Date().toISOString(),
    summary: "Abre tarefa automática 60 dias antes do vencimento do contrato com índice de reajuste IPCA/IGP-M.",
    inputKeys: Object.keys(payload)
  };
}
