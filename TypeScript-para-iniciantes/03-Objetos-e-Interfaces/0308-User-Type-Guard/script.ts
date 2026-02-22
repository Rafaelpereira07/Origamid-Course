async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

interface Cursos {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: "iniciante" | "avancado";
  nome: string;
  tags: string[];
}

function isCurso(value: unknown): value is Cursos {
  if (value && typeof value === "object" && "horas" in value && "tags" in value) {
    return true;
  } else return false;
}

function handleCursos(data: unknown) {
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
