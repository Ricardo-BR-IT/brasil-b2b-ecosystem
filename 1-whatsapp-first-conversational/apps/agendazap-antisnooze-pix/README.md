# 💬 AgendaZap Confirmação Anti-Falta & Sinal PIX 30% (`agendazap-antisnooze-pix`)

- **Gatilho no WhatsApp:** `/agenda`
- **Mensalidade Sugerida:** **R$ 44,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Dentistas, psicólogos, clínicas de estética, tatuadores e barbearias
- **Dor Crítica Resolvida:** 30% dos clientes marcam horário e não aparecem (no-show). Gera o voucher de agendamento com cobrança automática de 30% de sinal via PIX Copia-e-Cola e termos de remarcação.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/agenda Paciente: Juliana Costa | Procedimento: Harmonização / Limpeza Profunda | Data: 25/11/2026 às 14:30 | Valor Total: R$ 450,00 | Sinal Reserva: 30% | PIX: clinica@estetica.com.br
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
