export class Router {
  routes = {
    GET: {},
    POST: {},
  };
  get(route, handler) {
    this.routes['GET'][route] = handler;
  }
  post(route, handler) {
    this.routes['POST'][route] = handler;
  }
  find(method, route) {
    return this.routes[method]?.[route] || null;
  }
}
