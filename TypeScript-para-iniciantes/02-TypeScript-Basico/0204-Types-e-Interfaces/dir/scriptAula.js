"use strict";
;
function preecherDados(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "SIM" : "NÃO"}</p>
    </div>
  `;
}
const computador = {
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
function pintarCategoria(categoria) {
    console.log(categoria);
}
console.log(pintarCategoria("codigo"));
