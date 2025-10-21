"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    console.log(data);
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        let color;
        if (curso.nivel === "iniciante")
            color = "blue";
        else
            color = "red";
        document.body.innerHTML += `
      <h2 style="color: ${color};">${curso.nome} - ${curso.nivel}</h2>
      <p>${curso.aulas} aulas | ${curso.horas} horas</p>
      <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
      <p>Tags: ${curso.tags.join(", ")}</p>
      <p>Aulas: ${curso.idAulas.join(" | ")}</p>
    `;
    });
}
