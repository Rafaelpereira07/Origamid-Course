import type { Middleware } from '../router.ts';

export const bodyJson: Middleware = async (req, res) => {
  if (
    req.headers['content-type'] !== 'application/json' &&
    req.headers['content-type'] !== 'application/json;charset=utf-8'
  ) {
    return;
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString('utf-8');
  if (body === '') {
    req.body = {};
    return;
  }
  req.body = JSON.parse(body);
};
