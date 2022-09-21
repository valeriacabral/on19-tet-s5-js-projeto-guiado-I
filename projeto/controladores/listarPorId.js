// Pergunte qual id mostrar detalhes
// Mostre a tabela com apenas o produto selecionado, com todos os campos

const readline = require("readline-sync");
const { database } = require("../database");

const listarPorId = () => {
  console.log("QUAL PRODUTO DESEJA DETALHAR?");
  const produtoIdSelecionado = readline.question();
  console.log("Produto id selecionado: " + produtoIdSelecionado);
  const detalhesIdSelecionado = database.find(item => item.id == produtoIdSelecionado);
  console.table(detalhesIdSelecionado);
  console.log("DÊ ENTER PARA VOLTAR AO MENU");
  readline.question();
  console.clear();
}

module.exports = {
  listarPorId
}