//Programa que calcula o valor de parcelas,
//arrendondando para 00 e o ultimos em centavos

var prompt = require("prompt-sync")()
let valorCompra = Number(prompt("Digite o valor da compra"));
let nParcelas = Number(prompt("Digite quantas parcelas"));
let valorMediaParcelas;
let somatoriaSobrando;
console.log(`${valorCompra}`);
console.log(`Nº de parcelas: ${nParcelas}`);
console.log(`-----------------------`);
valorMediaParcelas = valorCompra / nParcelas;
somatoriaSobrando = valorMediaParcelas - Math.floor(valorMediaParcelas);
somatoriaSobrando = somatoriaSobrando.toFixed(2);
console.log(valorMediaParcelas);
console.log(somatoriaSobrando);

for (i = 0; i < nParcelas; i++) {
  console.log(i);
}


