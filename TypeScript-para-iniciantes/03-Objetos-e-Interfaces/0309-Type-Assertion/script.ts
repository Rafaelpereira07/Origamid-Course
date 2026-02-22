interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  // uso do 'as'
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  return response.json() as Promise<Produto>; // assim
}

async function handleProduto() {
  const produto = (await fetchProduto()) as Produto; // assim
  (produto as Produto).nome; // ou assim
}
handleProduto();

const video = document.querySelector("video")!; // ! indica que o elemento não é null

video.volume;

document.querySelector("a")!.href = "https://w";

const video1 = document.querySelector(".player") as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector(".player");
const video3 = document.querySelector<HTMLVideoElement>(".player"); // mais seguro
const video4 = document.querySelector(".player");

(video4 as HTMLVideoElement).volume;
