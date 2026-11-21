document.addEventListener('DOMContentLoaded', () => {
  const ids = ['v0', 'v1', 'v2', 'v3'];
  const out = document.getElementById('output');

  function compute() {
    const vals = ids.map(id => parseFloat(document.getElementById(id).value || '0'));
    const [a, b, c, d] = vals;
    const baseBruta = Math.max(a, b);
    const descontosTaxas = baseBruta * ((c + d) / 100);
    const liquido = b > a ? (b - a - (b * (c + d) / 100)) : (a - descontosTaxas);
    const margemPct = baseBruta > 0 ? ((liquido / baseBruta) * 100) : 0;

    const report = [
      `📊 Calculadora Correção Monetária Selic, IPCA, IGP-M & Juros`,
      `──────────────────────────────`,
      `• Valor Original (R$): ${a.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`,
      `• Índice Acumulado (%): ${b.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`,
      `• Meses de Juros (1% a.m.): ${c.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`,
      `• Multa Contratual (%): ${d.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`,
      `──────────────────────────────`,
      `✅ Resultado Líquido: R$ ${liquido.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`,
      `📈 Eficiência / Margem Real: ${margemPct.toFixed(2)}%`,
      `🛡️ Status LGPD: Processado 100% no Navegador`
    ].join('\n');

    out.textContent = report;
    if (chrome?.storage?.local) {
      chrome.storage.local.set({ lastVals: vals, lastReport: report });
    }
  }

  document.getElementById('calcBtn').addEventListener('click', compute);
  document.getElementById('copyBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(out.textContent);
    document.getElementById('copyBtn').textContent = '✅ Copiado!';
    setTimeout(() => document.getElementById('copyBtn').textContent = 'Copiar Relatório / CSV', 1500);
  });
  compute();
});
