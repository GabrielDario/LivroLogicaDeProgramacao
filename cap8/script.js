let ano = document.getElementById("ano");
let modelo = document.getElementById("modelo");
let preco = document.getElementById("preco");

let entradaCarro = document.getElementById("entradaCarro");
let parcelasCarro = document.getElementById("parcelasCarro");


let classificarCarro = (anoCarro, anoAtual = 2022) => {
  let classificando = "";
  if (anoCarro == anoAtual) {
    classificando = "Novo";
  } if (anoCarro <= anoAtual - 1) {
    classificando = "Semi-Novo";
  } if (anoCarro <= 2020) {
    classificando = "Usado";
  }
  return classificando;
}

let valorEntrada = (precoCarro) => {
  let entrada;
  let preco2 = preco.value;
 
  if (classificarCarro(ano.value) == "Novo") {
    entrada = preco2 * 0.5;
  } else {
    entrada = preco2 * 0.3;
  }
  return entrada;
}

let valorParcelas = (precoCarro) => {
  let parcelasDe;
  let preco2 = preco.value;
  if (classificarCarro(ano.value) == "Novo") {
    parcelasDe = valorEntrada(preco.value) / 10;
  } else {
    parcelasDe = (preco2 - valorEntrada(preco.value)) /10 ;
  }

  return parcelasDe;
}

const situacao = classificarCarro(ano);


function procedimentos() {
  let ano2 = ano.value;
  let modeloCarro2 = modelo.value;

  let situacao = classificarCarro(ano2);
  modeloCarro.textContent = `${modeloCarro2} - ${situacao} `;
  let preco2 = preco.value;
  let entrada2 = valorEntrada(preco2);

  entradaCarro.textContent = `Valor de entrada: R$ ${entrada2}`;
  
  
  let parcelas = valorParcelas(preco.value);

  parcelasCarro.textContent = `10x de de: R$ ${parcelas}`;

}