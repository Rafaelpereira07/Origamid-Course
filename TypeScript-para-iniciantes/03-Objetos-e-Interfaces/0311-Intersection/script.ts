type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Produto & Carro) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProdutoCarro({ rodas: 4, portas: 5, preco: 32000 });

type TipoCarro = {
  rodas: number;
  portas: number;
};

type TipoCarroComPreco = TipoCarro & {
  preco: number;
};

interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro {
  preco: number;
}

function handleInterfaceCarro(carro: InterfaceCarro) {
  carro.portas;
}

interface Window {
  userId: number;
}

window.userId = 100;
