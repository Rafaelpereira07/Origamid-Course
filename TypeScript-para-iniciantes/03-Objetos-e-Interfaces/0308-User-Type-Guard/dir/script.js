"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function isCurso(value) {
    if (value && typeof value === "object" && "horas" in value && "tags" in value) {
        return true;
    }
    else
        return false;
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
      <h2>${item.nome}</h2>
      <p>${item.horas} | ${item.nivel}</p>
      <p>${item.tags.join(", ")}</p>
      `;
        });
    }
}
