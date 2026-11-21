# 💬 CobraZap PIX EMV & Régua Anti-Calote (`cobrazap-pix-regua`)

- **Gatilho no WhatsApp:** `/cobrar`
- **Mensalidade Sugerida:** **R$ 49,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Escolas, academias, contabilidades, locadoras e prestadores recorrentes
- **Dor Crítica Resolvida:** Constrangimento ao cobrar clientes inadimplentes no WhatsApp. Gera o código PIX Copia-e-Cola com multa/juros (2% + 1% a.m.) e a régua completa de 4 mensagens amigáveis dentro da lei (Art. 42 CDC).
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/cobrar Devedor: Marcos Oliveira | Valor Original: R$ 850,00 | Dias em Atraso: 18 | Multa: 2% | Juros Mensal: 1% | Chave PIX: financeiro@empresa.com.br
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
