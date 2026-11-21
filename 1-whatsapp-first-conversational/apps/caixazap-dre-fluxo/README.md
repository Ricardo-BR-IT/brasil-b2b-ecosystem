# 💬 CaixaZap Fechamento Diário & Mini-DRE (`caixazap-dre-fluxo`)

- **Gatilho no WhatsApp:** `/caixa`
- **Mensalidade Sugerida:** **R$ 39,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Lojas de rua, salões de beleza, barbearias, lanchonetes e MEIs
- **Dor Crítica Resolvida:** Empresário não sabe se teve lucro no mês porque não alimenta ERP. No CaixaZap ele manda 'vendi 650 pix, paguei 180 fornecedor' no chat e recebe o DRE com Margem Líquida e Ponto de Equilíbrio.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/caixa +1450.00 Vendas PIX | +980.00 Vendas Cartão | -620.00 Reposição Estoque | -180.00 Energia Elétrica | -95.00 Internet | -120.00 Taxas Maquininha
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
