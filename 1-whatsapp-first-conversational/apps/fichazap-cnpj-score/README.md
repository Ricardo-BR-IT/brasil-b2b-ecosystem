# 💬 FichaZap Consulta CNPJ, QSA, CNAE & Risco B2B (`fichazap-cnpj-score`)

- **Gatilho no WhatsApp:** `/cnpj`
- **Mensalidade Sugerida:** **R$ 44,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Atacadistas, distribuidoras, representantes comerciais e analistas de crédito
- **Dor Crítica Resolvida:** Vender faturado no boleto para CNPJ inapto ou recém-aberto com capital de R$ 100. Basta digitar o CNPJ no WhatsApp para validar na Receita/BrasilAPI e gerar a Ficha de Aprovação de Crédito.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/cnpj 33.000.167/0001-01 | Limite Solicitado: R$ 15.000,00 | Prazo Boleto: 28/56 dias
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
