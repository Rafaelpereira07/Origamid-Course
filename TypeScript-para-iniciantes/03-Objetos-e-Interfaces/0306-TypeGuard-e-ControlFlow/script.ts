const obj = {
  nome: "Origamid",
};

if ("nomes" in obj) {
  console.log("Sim");
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduto(json);
}

interface Produto {
  nome: string;
  preco: number;
}

function handleProduto(data: Produto) {
  if ("preco" in data)
    document.body.innerHTML += `
    <p>nome: ${data.nome}</p>
    <p>preço: R$ ${data.preco}</p>
  `;
}

fetchProduto();
