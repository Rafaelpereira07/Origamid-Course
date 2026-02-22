const { body }: { body: HTMLElement } = document;

interface Produto {
  nome: string;
  preco?: number;
}

function handleData({ nome, preco }: Produto) {
  nome.includes("book");
  preco?.toFixed();
}

handleData({
  nome: "Notebook",
  preco: 2000,
});

function handleClick1({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML += `<h2>Mouse click em x: ${pageX}</h2>`;
  }
}

function handleClick({ currentTarget, pageX }: MouseEvent) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h2>Mouse click em x: ${pageX}</h2>`;
  }
}

document.documentElement.addEventListener("click", handleClick);

function comparar(tipo: "maior" | "menor", ...numeros: number[]) {
  if (tipo === "menor") {
    return Math.min(...numeros);
  }
  if (tipo === "maior") {
    return Math.max(...numeros);
  }
}

console.log(comparar("menor", 2, 4, 52, 8, 7, 1, 5, 30, 19));
console.log(comparar("maior", 2, 4, 52, 8, 7, 1, 5, 30, 19));
