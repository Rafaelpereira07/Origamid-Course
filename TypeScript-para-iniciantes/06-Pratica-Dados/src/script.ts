import { CountList } from "./CountBy.js";
import Estatisticas from "./estatisticas.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?",
  );
  if (!data) return;
  const transacoes = data.map(normalizarTransacao);
  preecherTabela(transacoes);
  preencherEstatisticas(transacoes);
}

function preencherLista(lista: CountList, containerId: string): void {
  const containerElement = document.getElementById(containerId);
  if (containerElement) {
    Object.keys(lista).forEach((key) => {
      containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
    });
  }
}

function preencherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatisticas(transacoes);
  console.log(data);

  preencherLista(data.pagamento, "pagamento");
  preencherLista(data.status, "status");

  const totalElement = document.querySelector<HTMLSpanElement>("#total span");
  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const diaElement = document.querySelector<HTMLSpanElement>("#dia span");
  if (diaElement) {
    diaElement.innerText = data.melhorDia[0];
  }
}

function preecherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacaoLista tbody");
  if (!tabela) return;
  transacoes.forEach((transacao) => {
    tabela.innerHTML += `
    <tr>
      <td>${transacao.nome}</td>
      <td>${transacao.email}</td>
      <td>R$ ${transacao.moeda}</td>
      <td>${transacao.pagamento}</td>
      <td>${transacao.status}</td>
    </tr>
    `;
  });
}

handleData();
