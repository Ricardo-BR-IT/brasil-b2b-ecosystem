# 💬 PrecificaZap Ficha Técnica, CMV, Taxa iFood & Maquininha (`precificazap-ifood-markup`)

- **Gatilho no WhatsApp:** `/preco`
- **Mensalidade Sugerida:** **R$ 49,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Restaurantes, hamburguerias, pizzarias, confeitarias e lojistas
- **Dor Crítica Resolvida:** Restaurante vende muito no iFood mas fecha no vermelho porque multiplicou o custo por 2 sem somar 27,2% do iFood + 6% imposto + embalagem. Calcula o preço de cardápio no balcão e no app com lucro líquido garantido.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/preco Produto: Combo Smash Duplo + Fritas | Custo Insumos: R$ 14,20 | Embalagem: R$ 2,60 | Taxa iFood Entrega Parceira: 26.2% | Taxa Maquininha Balcão: 3.49% | Imposto Simples: 4.5% | Lucro Líquido Alvo: 20%
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
