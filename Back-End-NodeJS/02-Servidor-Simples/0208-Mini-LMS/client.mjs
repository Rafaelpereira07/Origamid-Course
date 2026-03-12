const base = 'http://localhost:3000';

await fetch(base + '/cursos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    slug: 'javascript',
    nome: 'JavaScript',
    descricao: 'JavaScript para iniciantes',
  }),
});

await fetch(base + '/aulas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    curso_id: 2,
    slug: 'arrays',
    nome: 'Arrays',
  }),
});

const listarCursos = await fetch(base + '/cursos').then((r) => r.json());
// console.log(listarCursos);
const listarCurso = await fetch(base + '/curso?slug=javascript').then((r) =>
  r.json(),
);
// console.log(listarCurso);

const listarAulas = await fetch(base + '/aulas?slug=javascript').then((r) =>
  r.json(),
);
// console.log(listarAulas);

const listarAula = await fetch(
  base + '/aula?curso=back-end-node-js&slug=0208-mini-lms-1',
).then((r) => r.json());
console.log(listarAula);
