const prompt = require("prompt-sync")()
//ENTRADAS
var salario = Number(prompt("Digite salario atual: "));
var tempo = Number(prompt("O tempo em anos"));
var quadrienios = Number(quadrienios);
var salarioFinal = Number(salarioFinal);

//soma
quadrienios = tempo/4;
quadrienios = Math.floor(quadrienios);
salarioFinal = (salario * (quadrienios / 100)) + salario;

//saida 
console.log("Salário: " + salario);
console.log("Tempo(anos): " + tempo);
console.log("Quadrilênios " + quadrienios);

console.log("Salario Final: " + salarioFinal);
