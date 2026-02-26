interface Produto {
  nome: string;
  preco: number;
  novo: boolean;
}

let chave1: keyof Produto;
let chave2: "nome" | "preco" | "novo";

chave1 = "nome";

function coordenadas(x: number, y: number) {
  return { x, y };
}

let coord: typeof coordenadas;

// coord = "teste";

coord = (x: number, y: number) => {
  return {
    x,
    y,
  };
};

// exemplos em usos mais "reais/avançados"

interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

function selecionar<K extends keyof Elementos>(seletor: K): Elementos[K] | null {
  return document.querySelector(seletor);
}

selecionar("a")?.href;
selecionar("video")?.volume;

// keyof 2

async function fetchData<T>(url: string): Promise<T> {
  const base = "https://api.origamid.dev/json";
  const response = await fetch(base + url);
  return await response.json();
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataformas: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

// verifica uma array de keys
function checkInterface<Interface>(
  obj: unknown,
  ...keys: Array<keyof Interface>
): obj is Interface {
  if (
    obj &&
    typeof obj === "object" &&
    keys.filter((key) => key in obj).length === keys.length
  )
    return true;
  else return false;
}

// verifica 1 unica key
function checkInterfaceSimples<T>(obj: unknown, key: keyof T): obj is T {
  if (obj && typeof obj === "object" && key in obj) return true;
  else return false;
}

async function handleData() {
  const jogo = await fetchData("/jogo.json");
  if (checkInterface<Jogo>(jogo, "desenvolvedora", "ano")) {
    console.log(jogo.desenvolvedora.toLowerCase());
  }

  const livro = await fetchData("/livro.json");
  if (checkInterfaceSimples<Livro>(livro, "autor")) {
    console.log(livro.autor);
  }
}

handleData();
