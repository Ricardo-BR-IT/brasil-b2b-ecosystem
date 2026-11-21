# 💬 ImobZap Simulador SAC vs Price, FGTS & Custos de Escritura/ITBI (`imobzap-sac-price-itbi`)

- **Gatilho no WhatsApp:** `/imovel`
- **Mensalidade Sugerida:** **R$ 59,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Corretores de imóveis, imobiliárias e correspondentes bancários Caixa/Bancos
- **Dor Crítica Resolvida:** Comprador desiste na hora da assinatura porque não sabia que precisava de +5% para ITBI, Registro e Avaliação além da entrada. Gera a lâmina comparativa SAC vs Price + custos de cartório pronta para o WhatsApp.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/imovel Imóvel: R$ 650.000,00 | Entrada + FGTS: R$ 150.000,00 | Prazo: 360 meses | Taxa Juros Anual: 9.85% a.a. | Alíquota ITBI Município: 3.0%
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
