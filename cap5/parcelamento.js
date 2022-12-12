
var prompt = require("prompt-sync")() //PARA RODAR NO NODE
let valorCompra = Number(prompt("Digite o valor da compra: "));
let nParcelas = Number(prompt("Digite quantas parcelas: "));
let valorMediaParcelas;
let somatoriaSobrando = 0;
let parcelas = [];
console.log(`Valor da Compra: ${valorCompra}`);
console.log(`Nº de parcelas: ${nParcelas}`);
console.log(`-----------------------`);
valorMediaParcelas = valorCompra / nParcelas;

valorMediaParcelas = valorMediaParcelas.toFixed(2);


for (i = 0; i < nParcelas; i++) {

  // SE FOR DIVISÍVEL, DIVIDIR TUDO IGUAL
  if (valorCompra % nParcelas == 0) {
    parcelas.push(valorMediaParcelas);
  }
  if (i != nParcelas - 1) { // SE Não for divisivel 
    parcelas.push(Math.floor(valorMediaParcelas));
    somatoriaSobrando = Math.floor(valorMediaParcelas) + somatoriaSobrando;
    console.log(`${i + 1}º parcela: R$ ${parcelas[i]}`);
  } else {
    let sobrando = valorCompra - Math.floor(valorMediaParcelas) - Math.floor(valorMediaParcelas);
    parcelas.push(sobrando);
    console.log(`${i + 1}º parcela: R$ ${parcelas[i]}`);
  }
}


