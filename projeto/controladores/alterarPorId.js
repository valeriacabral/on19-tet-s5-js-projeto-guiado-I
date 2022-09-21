// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => { 
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question();
  
  const produtoEncontrado = database.findIndex(database => database.id == idSelecionado);

  const itemBuscado = database.find(database => database.id == idSelecionado);
  database.splice(produtoEncontrado, 0);
  console.log("Este é o produto a ser alterado: ");
  console.table(itemBuscado);

  const alterarPorId = () => {
    console.log("Vamos lá alterar as informações!");
    const novoNome = readline.question(`Digite o novo nome do produto: `);
    const novoPreco = readline.question(`Digite o novo preco do produto: `);
    const novaQuantidade = readline.question(`Digite a nova quantidade do produto: `);
    const novaMarca = readline.question(`Digite a nova marca do produto: `);

    const produtoAlterado = {
      id: +idSelecionado,
      nome: novoNome,
      preco: +novoPreco,
      quantidade: +novaQuantidade,
      marca: novaMarca
      }
    console.log("Aqui estão as alterações feitas por você: "); 
    console.table(produtoAlterado);

    database.splice(produtoEncontrado, 1, produtoAlterado);
  }
  alterarPorId();
  
  console.log("Caso deseje voltar, pressione ENTER");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}
