let ano = document.getElementById("ano");
let modelo = document.getElementById("modelo");
let preco = document.getElementById("preco");

let modeloCarro = document.getElementById("modeloCarro");
let entradaCarro = document.getElementById("entradaCarro");
let parcelasCarro = document.getElementById("parcelasCarro");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", e => {
  ano = ano.value;
  preco = preco.value;

  
  const situacao = classificarCarro(ano);
  const entrada = valorEntrada(preco);

  modeloCarro.textContent = modelo.value + " - " + situacao;
  entradaCarro.textContent = "Entrada: R$" + entrada;
  parcelasCarro.textContent = situacao;
})

let classificarCarro = (ano, anoAtual = 2023) => {
  let classificando = "";
  if (ano == anoAtual) {
    classificando = "Novo";
  } if (ano <= anoAtual - 1) {
    classificando = "Semi-Novo";
  } if (ano <= 2020) {
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
    parcelasDe = (preco2 - valorEntrada(preco.value)) / 10;
  }

  return parcelasDe;
}




