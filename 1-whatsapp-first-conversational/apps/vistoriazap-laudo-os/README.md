# 💬 VistoriaZap Laudo Técnico & Ordem de Serviço PDF (`vistoriazap-laudo-os`)

- **Gatilho no WhatsApp:** `/vistoria`
- **Mensalidade Sugerida:** **R$ 69,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Imobiliárias, assistência técnica, energia solar, dedetizadoras e engenheiros
- **Dor Crítica Resolvida:** Vistorias feitas no papel ou perdidas em mensagens soltas. O técnico preenche o checklist no chat e gera um Laudo/OS oficial numerado com hash SHA-256 de integridade jurídica e garantia.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/vistoria Local: Apto 402 Ed. Horizonte | Técnico: Carlos Mendes | Itens OK: Pintura, Hidráulica, Quadro Elétrico | Pendências: Trinca vidro varanda, Fechadura porta serviço | Garantia: 90 dias
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
