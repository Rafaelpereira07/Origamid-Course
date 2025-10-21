let total: string | number = 200;
total = "Olá";

function isNumber(value: string | number) {
  if (typeof value == "number") return true;
  else return false;
}

console.log(isNumber("12"));

const button = document.querySelector("button");

// Optional chaining '?'
button?.click();
