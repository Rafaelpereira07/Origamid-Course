const params = 'cor=azul&tamanho=g';
const url = 'http://localhost:3000/produtos?';

const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ username: 'rafael', password: '123654' }),
});

// console.log(response);

const body = await response.json();

console.log(body.nome);
