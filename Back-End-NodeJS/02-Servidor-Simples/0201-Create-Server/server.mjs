import { createServer } from 'node:http';

const server = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  console.log(request.url);
  if (request.method === 'GET' && request.url === '/') {
    response.statusCode = 200;
    response.end('Home');
  } else if (request.method === 'POST' && request.url === '/produtos') {
    response.statusCode = 201;
    response.end('Produtos');
  } else {
    response.statusCode = 404;
    response.end('Página não encontrada');
  }
  console.log(request.method);
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
