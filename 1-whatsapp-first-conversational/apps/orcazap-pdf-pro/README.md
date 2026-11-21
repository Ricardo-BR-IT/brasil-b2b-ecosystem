# 💬 OrçaZap PDF Timbrado & PIX Pro (`orcazap-pdf-pro`)

- **Gatilho no WhatsApp:** `/orcamento`
- **Mensalidade Sugerida:** **R$ 49,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Prestadores de serviço, oficinas, clínicas, técnicos de refrigeração, eletricistas e gráficas
- **Dor Crítica Resolvida:** Dono de PME perde vendas porque demora horas para abrir computador e fazer orçamento. No OrçaZap ele manda texto ou áudio no WhatsApp e recebe o PDF timbrado com QR Code PIX em 3 segundos.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/orcamento Cliente: Clínica Sorriso | 3x Limpeza Ar Split 12000 BTUs R$ 180 | 1x Carga de Gás R$ 220 | Desconto PIX: 10% | Chave PIX: 12.345.678/0001-90
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
