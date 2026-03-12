import fs from 'node:fs/promises';

try {
  await fs.mkdir('./produtos');
} catch {
  console.log('Pasta já existe');
}

fs.writeFile('./produtos/notebok.json', JSON.stringify({ nome: 'Notebook' }));

const dados = await fs.readFile('./produtos/notebok.json', 'utf-8');

const dir = await fs.readdir('./produtos', { recursive: true });
console.log(dir);

console.log(dir.filter((file) => file.endsWith('.txt')));

console.log(dados);
