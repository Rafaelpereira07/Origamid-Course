interface Produto {
  nome: string;
  quantidade: number;
}

const produto1 = {
  nome: "Notebook",
  quantidade: 10,
  cor: "azul",
};

const produto2 = {
  nome: "Geladeira",
  quantidade: 30,
  freezer: true,
};

const servico1 = {
  nome: "Instalação",
};

function mostrarQuantidade(produto: Produto) {
  console.log(produto.quantidade + 20);
}

mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
// mostrarQuantidade(servico1);

function mostrarQuantidadePartial(produto: Partial<Produto>) {
  if (produto.quantidade) {
    console.log(produto.quantidade + 20);
  }
}

interface Post {
  titulo: string;
  visializacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo: Post = {
  titulo: "Como aprende TS",
  visializacoes: 3001,
  tags: ["TS", "TypeScript"],
  autor: "André",
};

if (typeof artigo.autor === "string") artigo.autor.length;
artigo.desccricao;

interface ObjetoLiteral {
  [key: string]: unknown;
}

type ObjetoLiteral2 = Record<string, unknown>;
type ObjetoLiteral3 = Record<"titulo" | "autor", unknown>;

function mostrarTitulo(obj: ObjetoLiteral2) {
  if ("titulo" in obj) {
    console.log(obj.titulo);
  }
}

mostrarTitulo({
  titulo: "HTML e CSS",
});
