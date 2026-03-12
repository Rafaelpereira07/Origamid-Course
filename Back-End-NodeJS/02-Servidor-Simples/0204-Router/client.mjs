const response = await fetch('http://localhost:3000/produto', {
  method: 'POST',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body: JSON.stringify({ username: 'rafael', password: '123654' }),
});

// console.log(response);

const body = await response.text();
console.log(body);
