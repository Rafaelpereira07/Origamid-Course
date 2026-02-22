"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
window.UserData = {};
function validateJSON(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function isUserData(obj) {
    if (obj && typeof obj === "object" && ("nome" in obj || "email" in obj || "cpf" in obj))
        return true;
    else
        return false;
}
function loadLocalStorage() {
    const localUserData = localStorage.getItem("UserData");
    if (localUserData && validateJSON(localUserData)) {
        const userData = JSON.parse(localUserData);
        if (isUserData(userData)) {
            Object.entries(userData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData = value;
                }
            });
        }
    }
}
loadLocalStorage();
function setUserData({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
    }
}
const form = document.querySelector("#form");
form?.addEventListener("keyup", setUserData);
