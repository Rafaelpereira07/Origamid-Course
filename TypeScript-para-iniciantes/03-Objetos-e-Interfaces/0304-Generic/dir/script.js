"use strict";
// function retorno<variavel>(a: variavel): variavel {
//   return a;
// }
// console.log(retorno("A Game"));
// console.log(retorno<number>(100));
// console.log(retorno(400));
// console.log(retorno(false));
//
//
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"];
// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0, 5);
// }
// console.log(firstFive(numeros));
// console.log(firstFive(frutas));
//
//
// function notNull<T>(arg: T) {
//   if (arg !== null) return arg;
//   else return null;
// }
// notNull("Rafael")?.toLowerCase();
// notNull(100)?.toFixed(2);
//
//
// function tipoDado<T>(a: T): { dado: T; tipo: string } {
//   const resultado = {
//     dado: a,
//     tipo: typeof a,
//   };
//   console.log(resultado);
//   return resultado;
// }
// tipoDado("Teste");
// tipoDado(30);
// tipoDado(false);
//
//
// const link = document.querySelector("a");
// function extractText<T extends HTMLElement>(el: T) {
//   return {
//     texto: el.innerText,
//     el,
//   };
// }
// if (link) {
//   console.log(extractText(link));
// }
//
//
// function $<T extends Element>(selector: string): T | null {
//   return document.querySelector(selector);
// }
// const link = $<HTMLAnchorElement>("a");
//
//
const link = document.querySelector(".link");
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook);
}
handleData();
