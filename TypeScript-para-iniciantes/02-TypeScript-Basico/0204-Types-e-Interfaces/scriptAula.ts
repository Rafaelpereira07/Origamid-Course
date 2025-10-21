interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
};

type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};


function preecherDados(dados: InterfaceProduto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "SIM" : "NÃO"}</p>
    </div>
  `;
}

const computador: InterfaceProduto = {
  nome: "Computador",
  preco: 2000,
  teclado: true,
};

preecherDados(computador);

preecherDados({
  nome: "Notebook",
  preco: 2500,
  teclado: false,
});

type Categorias = "design" | "codigo" | "descod";

function pintarCategoria(categoria: Categorias) {
  console.log(categoria);
}

console.log(pintarCategoria("codigo"));
