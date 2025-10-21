const button = document.querySelector('button');
const config = localStorage.getItem('config');

if (button !== null) {
  button.click();
}
if (button) {
  button.click();
}
if (button) button.click();
button?.click();

// console.log(typeof null);

interface Product {
  nome?: string;
}

const livro: Product = {};
const jogo: Product = {
  nome: 'Ragnarok',
};

jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();
