var prompt = require("prompt-sync")()

console.log("Programa de imprimir etiquetas - Digite 0 para sair");
console.log("--------");
let produto;
let nProdutos;
let resto;
produto = prompt("Digite o produto: ");
nProdutos = Number(prompt("Digite quantas etiquetas você quer imprimir: "));

for (; nProdutos > 0; nProdutos = nProdutos - 2) {
 
  if (nProdutos == 1) {
    console.log(`${produto}`);
  } else {
    console.log(`${produto} ${produto}`);
  }
}