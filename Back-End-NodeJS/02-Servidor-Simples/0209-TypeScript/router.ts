import type { CustomRequest } from './custom-request.ts';
import type { CustomResponse } from './custom-response.ts';

type Handler = (
  req: CustomRequest,
  res: CustomResponse,
) => Promise<void> | void;

export class Router {
  routes = {
    GET: {},
    POST: {},
  };
  get(route: string, handler: Handler) {
    // @ts-expect-error
    this.routes['GET'][route] = handler;
  }
  post(route: string, handler: Handler) {
    // @ts-expect-error
    this.routes['POST'][route] = handler;
  }
  find(method: string, route: string) {
    // @ts-expect-error
    return this.routes[method]?.[route] || null;
  }
}
