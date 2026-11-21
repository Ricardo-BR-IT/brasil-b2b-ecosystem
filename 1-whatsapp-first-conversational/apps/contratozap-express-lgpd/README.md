# 💬 ContratoZap Express Prestação de Serviços & LGPD (`contratozap-express-lgpd`)

- **Gatilho no WhatsApp:** `/contrato`
- **Mensalidade Sugerida:** **R$ 54,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Agências de marketing, freelancers, fotógrafos, arquitetos e consultores
- **Dor Crítica Resolvida:** Fechar serviço 'de boca' no WhatsApp e levar calote ou sofrer escopo infinito. Gera contrato completo regido pelo Código Civil (Arts. 593-609) + cláusula LGPD + termo de aceite em 5 segundos.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/contrato Contratante: Padaria Pão Dourado LTDA (14.555.888/0001-22) | Serviço: Gestão de Tráfego Pago e Redes Sociais | Valor: R$ 1.800,00/mês | Prazo: 6 meses | Foro: São Paulo/SP
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
