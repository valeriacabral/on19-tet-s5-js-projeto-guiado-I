console.clear();
const { alterarPorId } = require("./controladores/alterarPorId");
const { alterarPrecos } = require("./controladores/alterarPrecos");
const { deletarProduto } = require("./controladores/deletarProduto");
const { inserirProduto } = require("./controladores/inserirProduto");
const { listarPorId } = require("./controladores/listarPorId");
const { listarTudo } = require("./controladores/listarTudo");
const readline = require("readline-sync");

const inicial = () => {
  console.log(`=====BEM-VINDX AO MEU CRUD=======
  1 - LISTAR OS PRODUTOS
  2 - VER DETALHES DE UM PRODUTO POR ID
  3 - CADASTRAR NOVO PRODUTO
  4 - ALTERAR UM PRODUTO POR ID
  5 - APLICAR AUMENTO A TODOS OS PREÇOS
  6 - EXCLUIR UM PRODUTO POR ID
  7 - OUTRAS OPÇÕES
  8 - SAIR
  DIGITE DE 1 ATÉ 7 PARA ESCOLHER UMA OPÇÃO:
  `);
  const resposta = readline.question();

  console.clear();

  switch (resposta) {
    case "1":
      listarTudo();
      inicial();
      break;

    case "2":
      listarPorId();
      inicial();
      break;

    case "3":
      inserirProduto();
      inicial();
      break;

    case "4":
      alterarPorId();
      inicial();
      break;

    case "5":
      alterarPrecos();
      inicial();
      break;

    case "6":
      deletarProduto();
      inicial();
      break;

    case "7":
      console.log("-------");
      inicial();
      break;

    case "8":
      console.log("Adeuss!");
      break;

    default:
      console.log(`A opção ${resposta} não existe. Digite novamente`);
      inicial();
      break;
  }
}

inicial();