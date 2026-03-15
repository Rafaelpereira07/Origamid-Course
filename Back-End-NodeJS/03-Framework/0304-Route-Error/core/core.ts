import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
  type Server,
} from 'node:http';
import { Router } from './router.ts';
import { customRequest } from './http/custom-request.ts';
import { customResponse } from './http/custom-response.ts';
import { bodyJson } from './middleware/body-json.ts';
import { RouteError } from './utils/route-error.ts';

export class Core {
  router: Router;
  server: Server;
  constructor() {
    this.router = new Router();
    this.router.use([bodyJson]);
    this.server = createServer((req, res) => this.handler(req, res));
  }
  handler = async (request: IncomingMessage, response: ServerResponse) => {
    try {
      const req = await customRequest(request);
      const res = customResponse(response);

      for (const middleware of this.router.middlewares) {
        await middleware(req, res);
      }

      const matched = this.router.find(req.method || '', req.pathname);
      if (!matched) {
        throw new RouteError(404, 'nao encontrada');
      }
      const { route, params } = matched;
      req.params = params;

      for (const middleware of route.middlewares) {
        await middleware(req, res);
      }

      await route.handler(req, res);
    } catch (error) {
      if (error instanceof RouteError) {
        console.error(
          `${error.status} ${error.message} | ${request.method} ${request.url}`,
        );
        response.statusCode = error.status;
        response.setHeader('content-type', 'application/problem+json');
        response.end(
          JSON.stringify({ status: response.statusCode, title: error.message }),
        );
      } else {
        console.error(error);
        response.statusCode = 500;
        response.setHeader('content-type', 'application/problem+json');
        response.end(
          JSON.stringify({ status: response.statusCode, title: 'error' }),
        );
      }
    }
  };
  init() {
    this.server.listen(3000, () => {
      console.log('Server: http://localhost:3000');
    });
  }
}
