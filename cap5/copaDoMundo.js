var prompt = require("prompt-sync")()
console.log("Programa da copa do mundo - Digite 0 para sair");
console.log("--------");
let ano;

do {
  ano = Number(prompt("Digite o ano: "));
  if (ano == 0) {
    break;
  }

  if (ano < 1930 && ano > 0) {
    console.log("Esse ano não existia copa do mundo ainda!")
  }
  if (ano >= 1930) {
    let resto = ano % 4 == 2;
    if (ano == 1942 || ano == 1946) {
      console.log("Não teve copa do mundo por causa da guerra!");
    } else if (resto) {
      console.log("Teve copa do mundo!");
    } else {
      console.log("Não Teve copa do mundo!");
    
    }
  }
} while (ano != 0); 