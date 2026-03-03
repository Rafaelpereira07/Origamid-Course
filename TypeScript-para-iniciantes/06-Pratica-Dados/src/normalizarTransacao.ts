import moedaParaNumero from "./moedaParaNumero.js";
import stringToDate from "./stringToDate.js";

declare global {
  type TransacaoPagamento = "Cartão de Crédito" | "Boleto";
  type TransacaoStatus =
    | "Paga"
    | "Recusada pela operadora de cartão"
    | "Aguardando pagamento"
    | "Estornada";

  interface TransacaoAPI {
    ID: number;
    Nome: string;
    Email: string;
    Data: string;
    Status: TransacaoStatus;
    ["Cliente Novo"]: 0 | 1;
    ["Forma de Pagamento"]: TransacaoPagamento;
    ["Valor (R$)"]: string;
  }

  interface Transacao {
    nome: string;
    id: number;
    data: Date;
    status: TransacaoStatus;
    email: string;
    moeda: string;
    valor: number | null;
    pagamento: TransacaoPagamento;
    novo: boolean;
  }
}

export default function normalizarTransacao(transacao: TransacaoAPI): Transacao {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: stringToDate(transacao.Data),
    status: transacao.Status,
    email: transacao.Email,
    moeda: transacao["Valor (R$)"],
    valor: moedaParaNumero(transacao["Valor (R$)"]),
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]),
  };
}
