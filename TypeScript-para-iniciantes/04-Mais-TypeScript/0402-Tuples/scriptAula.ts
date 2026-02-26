const produto1 = ["notebook", 2500];
const produto2: [string, number] = ["notebook", 2500];

const [nome, preco] = produto2;

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}

const button = getText("button");

console.log(button);
