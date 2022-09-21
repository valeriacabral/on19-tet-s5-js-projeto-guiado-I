// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual porcentual deseja aplicar a todos os produtos?");
  let percentual = readline.question();
  console.log("Porcentual de aumento: " + percentual);
  console.log(`Você realmente quer aplicar o aumento de ${percentual}%?`);
  const confirmar = readline.question(`Para confirmar a aplicacao do porcentual de aumento, digite 1, e  
  caso deseje cancelar essa acao, aperte ENTER `);
  percentual = +percentual/100 + 1 
  const alterarPreco = () => {
    const aumentoPrecos = database.map((produto, i, database) => database[i] = {...produto, preco: + (produto.preco * +percentual)});
  }
  
  const resposta = () => (confirmar == 1) ? alterarPreco() : readline.question(`Voce escolheu cancelar a alteracao dos precos
  Agora aperte enter para manter inalterado o preco dos produtos`);
  resposta();
  console.clear();

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPrecos
}