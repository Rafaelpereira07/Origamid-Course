"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O hobbit") {
        return new Livro("O hibbit", "J. R. R. Tolkien");
    }
    if (busca === "Dark Souls") {
        return new Jogo("Dark Souls", 1);
    }
    return null;
}
const produto = buscarProduto("O hobbit");
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto instanceof Jogo) {
    console.log(produto.nome);
}
if (produto instanceof Produto) {
    console.log(produto.nome);
}
const carro = {
    nome: "Honda",
};
// console.log(carro instanceof Carro)  |  da erro
