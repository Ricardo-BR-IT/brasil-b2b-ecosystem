# 💬 NotaZap Leitor XML NF-e & Cupom OCR (`notazap-xml-cupom-ocr`)

- **Gatilho no WhatsApp:** `/nota`
- **Mensalidade Sugerida:** **R$ 59,90/mês** (PIX Recorrente via Asaas / Mercado Pago / Kiwify)
- **Público-Alvo no Brasil:** Comércio varejista, restaurantes, mercados e escritórios contábeis
- **Dor Crítica Resolvida:** Digitação manual de notas de compra e perda de XMLs fiscais. O empresário encaminha o XML ou foto do cupom para o WhatsApp e recebe a planilha de entrada com NCM, CFOP, ICMS e vencimentos.
- **Custo de Servidor:** **R$ 0,00/mês** (Cloudflare Workers Free Tier — até 100.000 requisições/dia grátis)

## Exemplo Real de Mensagem no WhatsApp
```text
/nota Fornecedor: Distribuidora Brasil LTDA | CNPJ: 11.222.333/0001-81 | NF-e: 000458921 | CFOP: 5102 | NCM: 8471.30.12 | Valor Total: R$ 4.850,00 | ICMS: 18%
```

## Deploy Instantâneo (Cloudflare Workers + Evolution API / Meta Cloud API)
```bash
npx wrangler deploy
```
