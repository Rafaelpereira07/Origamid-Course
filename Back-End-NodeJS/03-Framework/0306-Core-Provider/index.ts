import { ProductsApi } from './api/products/index.ts';
import { Core } from './core/core.ts';
import { logger } from './core/middleware/logger.ts';

const core = new Core();

core.router.use([logger]);

new ProductsApi(core).init();

core.router.get('/', (req, res) => {
  res.status(200).json('olá');
});

core.init();
