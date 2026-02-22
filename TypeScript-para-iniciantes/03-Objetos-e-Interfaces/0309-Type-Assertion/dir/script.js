"use strict";
async function fetchProduto() {
    // uso do 'as'
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    return response.json(); // assim
}
async function handleProduto() {
    const produto = (await fetchProduto()); // assim
    produto.nome; // ou assim
}
handleProduto();
const video = document.querySelector("video"); // ! indica que o elemento não é null
video.volume;
document.querySelector("a").href = "https://w";
const video1 = document.querySelector(".player");
const video2 = document.querySelector(".player");
const video3 = document.querySelector(".player"); // mais seguro
const video4 = document.querySelector(".player");
video4.volume;
