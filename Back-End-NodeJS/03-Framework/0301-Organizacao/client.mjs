const base = 'http://localhost:3000';

const response = await fetch(base + '/');
console.log(response.ok, response.status);
