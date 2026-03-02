const body = $("body");

// console.log(body.addClass("ativo"));

// console.log(_.difference([1, 2, 3, 5, 6], [2, 3, 1, 9]));

declare const Vimeo: any

const iframe = document.getElementById("vimeo");
const player = new Vimeo.Player(iframe);

console.log(player);
