"use strict";
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const btnMobile = document.getElementById("btn-mobile");
function handleClick(event) {
    const nav = document.getElementById("nav");
    if (nav && btnMobile instanceof HTMLElement) {
        nav.classList.toggle("active");
        const active = nav.classList.contains("active");
        const label = active ? "Fechar Menu" : "Abrir Menu";
        btnMobile.setAttribute("aria-expanded", String(active));
        btnMobile.setAttribute("aria-label", label);
    }
}
btnMobile?.addEventListener("pointerdown", handleClick);
