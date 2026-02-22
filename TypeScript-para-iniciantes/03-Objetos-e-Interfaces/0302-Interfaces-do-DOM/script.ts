const links = document.querySelectorAll(".link");

function changeStyles(element: HTMLElement) {
  element.style.color = "green";
  element.style.border = "1px solid green";
}

links.forEach((link) => {
  if (link instanceof HTMLElement) changeStyles(link);
});
