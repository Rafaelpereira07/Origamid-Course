import Clipboard from "clipboard";
import _ from "lodash";

interface Produto {
  nome: string;
}

_.difference([1, 2], [1]);

const livro: Produto = {
  nome: "A Guerra dos Tronos",
};

const button = new Clipboard("button");

button.on("success", handleCopy);

function handleCopy(event: Clipboard.Event) {
  console.log(event);
}
