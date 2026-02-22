async function fetchCurso() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

function handleCurso(data: unknown) {
  if (data instanceof Array) {
    console.log("É uma instancia de array");
  }
  if (Array.isArray(data)) {
    console.log("é array");
  }
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function handleData(data: unknown) {
  if (isString(data)) {
    console.log(data.toLowerCase());
  }
}

handleData(200);
handleData("Rafael");

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduto(json);
}
fetchProduto();

interface Produto {
  nome: string;
  preco: number;
}

function isProduto(value: unknown): value is Produto {
  if (value && typeof value === "object" && "nome" in value && "preco" in value) {
    return true;
  } else return false;
}

function handleProduto(data: unknown) {
  if (isProduto(data)) {
    console.log(data);
  }
}
