"use strict";
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
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
// mostrarQuantidade(servico1);
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log(produto.quantidade + 20);
    }
}
const artigo = {
    titulo: "Como aprende TS",
    visializacoes: 3001,
    tags: ["TS", "TypeScript"],
    autor: "André",
};
if (typeof artigo.autor === "string")
    artigo.autor.length;
artigo.desccricao;
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({
    titulo: "HTML e CSS",
});
