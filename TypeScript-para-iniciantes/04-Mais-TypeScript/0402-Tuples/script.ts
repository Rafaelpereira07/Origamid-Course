// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function getVendas() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const data = await response.json();
  console.log(data)
  somarVendas(data);
}
getVendas();

interface ProdutoDetalhes {
  cor: string;
  marca: string;
}

type Venda = [string, number, string, ProdutoDetalhes];

function somarVendas(vendas: Venda[]) {
  const total = vendas.reduce((total, venda) => {
    return total + venda[1];
  }, 0);
  document.body.innerHTML += `<p>Total: ${total}</p>`;
}
