"use strict";
const produto1 = ["notebook", 2500];
const produto2 = ["notebook", 2500];
const [nome, preco] = produto2;
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const button = getText("button");
console.log(button);
