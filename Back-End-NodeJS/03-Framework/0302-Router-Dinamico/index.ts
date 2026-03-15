import { Core } from './core/core.ts';
import { listarCurso } from './core/database.ts';

const core = new Core();

core.router.get('/curso/:slug', (req, res) => {
  // Pega um curso por slug
  const { slug } = req.params;
  const curso = listarCurso(slug);
  if (curso) res.status(200).json(curso);
  else res.status(400).json('Não foi possível carregar esse curso.');
});

core.router.get('/aula/:aula', (req, res) => {
  res.status(200).json('aula');
});

core.router.get('/', (req, res) => {
  res.status(200).json('olá');
});

core.init();
