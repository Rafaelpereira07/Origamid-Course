import { createServer } from 'node:http';

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');

  res.setHeader('Acess-Control-Allow-Headers', 'Content-Type, Authorization');

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString('utf-8');

  if (req.method === 'GET' && url.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`
      <html>
        <head>
        <title>Mundo</title>
        </head>
        <body>
        <h1>Olá mundo</h1>
        </body>
      </html>
      `);
  } else if (req.method === 'POST' && url.pathname === '/produtos') {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ nome: 'Notebook' }));
  } else {
    res.statusCode = 404;
    res.end('Página não encontrada');
  }
  console.log(req.method);
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
