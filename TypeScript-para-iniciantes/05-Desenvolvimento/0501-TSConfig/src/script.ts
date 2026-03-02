import plugin from "./plugin.js";

// ativa plugin
plugin();

interface Produto {
  nome: string;
  preco: number;
}

function handleProduto(dados: any) {
  dados;
}

const link = document.querySelector("a");
if (link) {
  link.innerHTML = "teste";
}

const teste = "testeas";

function handleClick(this: HTMLElement) {
  console.log(this);
}

document.documentElement.addEventListener("click", handleClick);

function trocarModo(modo: string) {
  if (modo === "dark") {
    return "color: black";
  } else {
    return "color: white";
  }
}

trocarModo("light");

function maiuscula(frase: string) {
  console.log();
  const total = 1000;
}
