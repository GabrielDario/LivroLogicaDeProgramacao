var prompt = require("prompt-sync")()
console.log('Digite uma formula');

let formula = prompt("Digite a formula: ");

let abriu = 0;
let fechou = 0;
let cadeado = false;

for (const caracteres of formula) {
  if(caracteres == '(') {
    abriu++;
    cadeado = true;
  }
  if (caracteres == ')') {
    fechou++;
    cadeado = false;
  }
}

const validacao = abriu == fechou && cadeado == false
if(validacao) {
    console.log('Fórmula Certa!');
} else {
    console.log('Fórmula Errada!');
}

