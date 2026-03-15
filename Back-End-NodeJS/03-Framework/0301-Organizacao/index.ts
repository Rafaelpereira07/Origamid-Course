import { Core } from './core/core.ts';
import {
  criarAula,
  criarCurso,
  listarAula,
  listarAulas,
  listarCurso,
  listarCursos,
} from './core/database.ts';

const core = new Core();

core.router.post('/cursos', (req, res) => {
  // Cria um curso
  const { slug, nome, descricao } = req.body;
  const curso = criarCurso({ slug, nome, descricao });
  if (curso) res.status(201).json(`Curso '${nome}' criado`);
  else res.status(400).json('Erro ao criar curso');
});
core.router.post('/aulas', (req, res) => {
  // Cria uma Aula
  const { curso_id, slug, nome } = req.body;
  const aula = criarAula({ curso_id, slug, nome });
  if (aula) res.status(201).json(`Aula '${nome}' Criada`);
  else res.status(400).json('Não foi possivel criar a aula');
});

core.router.get('/cursos', (req, res) => {
  // Lista todos os cursos
  const cursos = listarCursos();
  if (cursos) res.status(200).json(cursos);
  else res.status(400).json('Não foi possível carregar os cursos');
});
core.router.get('/curso', (req, res) => {
  // Pega um curso por slug
  const slug = req.query.get('slug');
  const curso = listarCurso(slug);
  if (curso) res.status(200).json(curso);
  else res.status(400).json('Não foi possível carregar esse curso.');
});
core.router.get('/aulas', (req, res) => {
  // Lista todas as aulas do curso por slug
  const slug = req.query.get('slug');
  const aulas = listarAulas(slug);
  if (aulas) res.status(200).json(aulas);
  else res.status(400).json('Não foi possível carregar as aulas');
});
core.router.get('/aula', (req, res) => {
  // Pega a aula usando o slug do curso e da aula
  const curso = req.query.get('curso');
  const slug = req.query.get('slug');
  const aula = listarAula(curso, slug);
  if (aula) res.status(200).json(aula);
  else res.status(400).json('Não foi possível carregar a aula');
});

core.router.get('/', (req, res) => {
  res.status(200).end('Hello');
});

core.init();
