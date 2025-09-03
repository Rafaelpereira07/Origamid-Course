// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const itens = document.querySelectorAll('li');

for(const item of itens) {
  item.classList.add('ativo');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const windowKey in window) {
  console.log(windowKey + ': ' + window[windowKey]);
}