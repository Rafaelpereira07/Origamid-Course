const params = 'cor=azul&tamanho=g';
const url = 'http://localhost:3000/produtos?' + params;

const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ username: 'rafael', password: '123654' }),
});

const body = await response.text();

console.log(body);
