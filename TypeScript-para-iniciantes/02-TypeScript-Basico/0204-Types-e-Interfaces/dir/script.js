"use strict";
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    console.log(data);
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <span>R$ ${data.preco}</span>
      <p>${data.descricao}</p>
      <p>Garantida de ${data.garantia} dias</p>
      <p>Possui seguro: ${data.seguroAcidentes ? "SIM" : "NÃO"}</p>
      <h4>Fabricante: ${data.empresaFabricante.nome}</h4>
      <h4>Montadora: ${data.empresaMontadora.nome}</h4>
    </div>
  `;
}
