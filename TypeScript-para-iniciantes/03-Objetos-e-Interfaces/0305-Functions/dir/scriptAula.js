"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
function abortar(mensagem) {
    throw new Error(mensagem);
}
function calcular(form) {
    form.perimetro;
}
function normalizar(valor) {
    if (typeof valor === "string")
        return valor.trim().toLowerCase();
    else
        return valor.map((v) => v.trim().toLowerCase());
}
function $(seletor) {
    return document.querySelector(seletor);
}
$("a")?.click();
$("video");
$(".item");
