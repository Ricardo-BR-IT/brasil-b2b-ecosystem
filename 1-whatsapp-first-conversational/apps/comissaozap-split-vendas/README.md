# 💬 ComissãoZap Split de Vendedores, Metas & Desconto MDR (`comissaozap-split-vendas`)

- **Gatilho no WhatsApp:** `/comissao`
- **Mensalidade Sugerida:** **R$ 49,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Lojas de móveis, concessionárias, clínicas odontológicas e infoprodutores
- **Dor Crítica Resolvida:** Pagar comissão cheia sobre o valor bruto de vendas parceladas em 12x (perdendo 14% de taxa de antecipação). Calcula a comissão líquida após MDR, bônus de meta batida e DSR sobre comissão.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/comissao Vendedor: Rafael Almeida | Vendas PIX/Vista: R$ 28.000 | Vendas Cartão 10x: R$ 42.000 (Taxa Antecipação 11.8%) | Meta Mensal: R$ 60.000 | Comissão Base: 4% | Bônus Supermeta: +1.5%
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
