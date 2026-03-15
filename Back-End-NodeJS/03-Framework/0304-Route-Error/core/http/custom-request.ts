import type { IncomingMessage } from 'node:http';

export interface CustomRequest extends IncomingMessage {
  query: URLSearchParams;
  pathname: string;
  body: Record<string, any>;
  params: Record<string, any>;
}

export async function customRequest(request: IncomingMessage) {
  const req = request as CustomRequest;
  const url = new URL(req.url || '', 'http://localhost');
  req.query = url.searchParams;
  req.pathname = url.pathname;
  req.params = {};
  req.body = {};

  return req;
}
