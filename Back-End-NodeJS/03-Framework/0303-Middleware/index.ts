import { Core } from './core/core.ts';
import { listarCurso } from './core/database.ts';
import { logger } from './core/middleware/logger.ts';

const core = new Core();

core.router.use([logger]);

core.router.get('/curso/:slug', (req, res) => {
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
