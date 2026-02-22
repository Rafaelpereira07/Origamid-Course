function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}

// console.log(somar(5, 2));

type Callback = (event: MouseEvent) => void;

function abortar(mensagem: string): never {
  throw new Error(mensagem);
}

// abortar("Um erro ocorreu");
// console.log("Tente")

interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcular(form: Quadrado) {
  form.perimetro;
}

function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") return valor.trim().toLowerCase();
  else return valor.map((v) => v.trim().toLowerCase());
}

// console.log(normalizar(" Produto  ").toUpperCase());
// console.log(normalizar([' Banana', 'UVA']).filter);

function $(seletor: "a"): HTMLAnchorElement | null;
function $(selector: "video"): HTMLVideoElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$("a")?.click();
$("video");
$(".item");
