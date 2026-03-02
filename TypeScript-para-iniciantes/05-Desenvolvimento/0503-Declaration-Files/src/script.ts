declare global {
  interface Usuario {
    nome: string;
    id: number;
  }
}

interface Produto {
  nome: string;
  preco: string;
}

interface Produto {
  nome: string;
  preco: string;
  cor: string;
}

export const livro: Produto = {
  nome: "A Guerra dos Tronos",
  preco: "199",
  cor: "marinho",
};
