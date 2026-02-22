"use strict";
const button = document.querySelector("button");
// function handleClick(event: MouseEvent) {
//   console.log(event.pageX);
// }
// button?.addEventListener("click", handleClick);
// function handleScroll(event: Event) {
//   console.log(event);
// }
// window.addEventListener("scroll", handleScroll);
// function ativarMenu(event: Event) {
//   console.log(event.type);
//   if (event instanceof MouseEvent) {
//     console.log(event.pageX);
//   }
//   if (event instanceof TouchEvent) {
//     console.log(event.touches[0].pageX);
//   }
// }
// document.documentElement.addEventListener("mousedown", ativarMenu);
// document.documentElement.addEventListener("touchstart", ativarMenu);
// document.documentElement.addEventListener("pointerdown", ativarMenu);
function handleClick(event) {
    console.log(this);
}
button?.addEventListener("click", handleClick);
function ativarMenu(event) {
    const elemento = event.currentTarget;
    if (elemento instanceof HTMLElement) {
        elemento.style.background = 'red';
    }
}
button?.addEventListener('click', ativarMenu);
window.addEventListener('keydown', ativarMenu);
