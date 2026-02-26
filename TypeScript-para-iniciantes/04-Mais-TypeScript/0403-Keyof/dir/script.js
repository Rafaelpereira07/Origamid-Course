"use strict";
let chave1;
let chave2;
chave1 = "nome";
function coordenadas(x, y) {
    return { x, y };
}
let coord;
// coord = "teste";
coord = (x, y) => {
    return {
        x,
        y,
    };
};
function selecionar(seletor) {
    return document.querySelector(seletor);
}
selecionar("a")?.href;
selecionar("video")?.volume;
// keyof 2
async function fetchData(url) {
    const base = "https://api.origamid.dev/json";
    const response = await fetch(base + url);
    return await response.json();
}
// verifica uma array de keys
function checkInterface(obj, ...keys) {
    if (obj &&
        typeof obj === "object" &&
        keys.filter((key) => key in obj).length === keys.length)
        return true;
    else
        return false;
}
// verifica 1 unica key
function checkInterfaceSimples(obj, key) {
    if (obj && typeof obj === "object" && key in obj)
        return true;
    else
        return false;
}
async function handleData() {
    const jogo = await fetchData("/jogo.json");
    if (checkInterface(jogo, "desenvolvedora", "ano")) {
        console.log(jogo.desenvolvedora.toLowerCase());
    }
    const livro = await fetchData("/livro.json");
    if (checkInterfaceSimples(livro, "autor")) {
        console.log(livro.autor);
    }
}
handleData();
