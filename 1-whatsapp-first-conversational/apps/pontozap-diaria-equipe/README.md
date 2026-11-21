# 💬 PontoZap Horas Extras, Adicional Noturno & Recibo Diária (`pontozap-diaria-equipe`)

- **Gatilho no WhatsApp:** `/ponto`
- **Mensalidade Sugerida:** **R$ 49,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Construtoras, empreiteiros, eventos, restaurantes e limpeza terceirizada
- **Dor Crítica Resolvida:** Processos trabalhistas por falta de recibo de diária e cálculo errado de hora extra 50%/100% e DSR. Calcula os encargos exatos no chat e emite o recibo pronto para assinatura.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/ponto Colaborador: João Batista | Salário Base: R$ 2.420,00 | Horas Extras 50%: 14h | Horas Extras 100%: 6h | Adicional Noturno: 18h | Diárias Extras: 2 x R$ 150,00
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
