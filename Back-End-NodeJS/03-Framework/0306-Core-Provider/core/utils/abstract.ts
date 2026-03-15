import type { Core } from '../core.ts';
import type { Handler } from '../router.ts';

export abstract class CoreProvider {
  core: Core;
  router: Core['router'];
  db: Core['db'];
  constructor(core: Core) {
    this.core = core;
    this.router = core.router;
    this.db = core.db;
  }
}
export abstract class Api extends CoreProvider {
  handlers: Record<string, Handler> = {};
  /** Utilize para criar as tableas */
  tables() {}
  /** Registre as rotas da API aqui */
  routes() {}
  init() {
    this.tables();
    this.routes();
  }
}
