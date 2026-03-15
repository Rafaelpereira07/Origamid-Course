const base = 'http://localhost:3000';

setTimeout(async () => {
  const response1 = await fetch(base + '/curso/python');
  console.log(response1.ok, response1.status);
  const body = await response1.json();
  console.log(body);
  const responde2 = await fetch(base + '/');
  console.log(responde2.ok, responde2.status);
}, 1000);
