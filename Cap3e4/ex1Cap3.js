const prompt = require("prompt-sync")()

//ENTRADAS
var carro = prompt("Digite seu carro: ");
var preco = Number(prompt("Preco: "));

//soma
var entrada = preco / 2;
var parcelado = entrada/12;
//saida 
console.log("Veículo: " + carro);
console.log("Preço: " + preco);
console.log("Promoção: " + carro);
console.log("Entrada de: " + entrada);
console.log("+12x de R$: " + parcelado.toFixed(2));