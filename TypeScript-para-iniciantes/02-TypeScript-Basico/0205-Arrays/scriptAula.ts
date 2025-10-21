const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, "Taxas", 30, "Produto", 50, 3];

function maiorQue10(data: number[]) {
  return data.filter((n) => n > 10);
}

// ou

function maiorQueDez(data: Array<number>) {
  return data.filter((n) => n > 10);
}

function filtrarValores(data: Array<number | string>) {
  return data.filter((item) => typeof item === "number");
}

console.log(maiorQue10(numeros));
console.log(filtrarValores(valores));

const dados = [
  ["Senhor dos aneis", 30],
  ["Guerra dos tronos", 120],
];
