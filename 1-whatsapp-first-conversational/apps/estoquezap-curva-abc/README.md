# 💬 EstoqueZap Alerta de Ruptura, Curva ABC & Pedido Compra (`estoquezap-curva-abc`)

- **Gatilho no WhatsApp:** `/estoque`
- **Mensalidade Sugerida:** **R$ 59,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Autopeças, materiais de construção, depósitos de bebidas e papelarias
- **Dor Crítica Resolvida:** Falta do produto que mais vende na prateleira e dinheiro parado em item sem giro. Calcula o Ponto de Reposição, classifica a Curva ABC e monta a mensagem de pedido pronta para o fornecedor.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/estoque Cimento CP-II 50kg: Estoque=18, Min=50, Custo=R$ 31,00, Giro=220/mês | Argamassa AC-III: Estoque=12, Min=30, Custo=R$ 24,50, Giro=95/mês | Tinta Acrílica 18L: Estoque=25, Min=15, Custo=R$ 189,00, Giro=40/mês
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
