import { Core } from './core/core.ts';
import { listarCurso } from './core/database.ts';
import { logger } from './core/middleware/logger.ts';
import { RouteError } from './core/utils/route-error.ts';

const core = new Core();

core.router.use([logger]);

core.router.get('/curso/:slug', (req, res) => {
  const { slug } = req.params;
  const curso = listarCurso(slug);
  if (!curso) throw new RouteError(404, 'Curso não encontrado.');
  res.status(200).json(curso);
});

core.router.get('/aula/:aula', (req, res) => {
  res.status(200).json('aula');
});

core.router.get('/', (req, res) => {
  res.status(200).json('olá');
});

core.init();
