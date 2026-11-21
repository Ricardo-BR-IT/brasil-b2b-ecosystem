# 💬 FreteZap Cubagem Aérea/Rodoviária, PAC/Sedex & Difal (`fretezap-correios-cubagem`)

- **Gatilho no WhatsApp:** `/frete`
- **Mensalidade Sugerida:** **R$ 39,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Vendedores de WhatsApp, atacadistas do Brás/Bom Retiro e distribuidoras
- **Dor Crítica Resolvida:** Prejuízo no frete por esquecer o peso cubado (C x L x A / 6000) em caixas volumosas. Calcula peso taxável real, comparativo Transportadora vs Sedex/PAC e seguro Ad Valorem/GRIS.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/frete Origem: 01001-000 | Destino: 70040-010 | Caixa: 60x45x40 cm | Peso Real: 8.5 kg | Valor NF: R$ 2.400,00
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
