# 💬 LicitaZap Calculadora de Lance Mínimo & Inexequibilidade (Lei 14.133) (`licitazap-pncp-radar`)

- **Gatilho no WhatsApp:** `/licitacao`
- **Mensalidade Sugerida:** **R$ 89,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Fornecedores do governo, construtoras e empresas participantes de pregões eletrônicos
- **Dor Crítica Resolvida:** Mergulhar no preço durante a disputa do Pregão Eletrônico (Compras.gov / PNCP) e tomar prejuízo ou ter a proposta desclassificada por inexequibilidade (Art. 59 §4º Lei 14.133/2021 - 75% em obras).
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/licitacao Órgão: Prefeitura Municipal | Valor Estimado Edital: R$ 480.000,00 | Custo Direto Total: R$ 295.000,00 | Impostos + BDI Mínimo: 16.5% | Tipo: Obra/Serviço de Engenharia
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
