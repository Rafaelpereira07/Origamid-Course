const response = await fetch(
  'http://localhost:3000/produto?categoria=frutas&slug=maca',
  {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify({
    //   nome: 'Maçã',
    //   slug: 'maca',
    //   categoria: 'frutas',
    //   preco: 2,
    // }),
  },
);

// console.log(response);

const body = await response.text();
console.log(body);
