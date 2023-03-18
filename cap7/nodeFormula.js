var prompt = require("prompt-sync")()
console.log('Digite uma formula');

let formula = prompt("Digite a formula: ");


let abriu = 0; //quantos (
let fechou = 0; //quantos )

let contChave = 0; //verificar se quebra com contador
let quebrarChave = false;

for (const caracteres of formula) {
  if (caracteres == '(') {
    abriu++;
    contChave++;
  }
  if (caracteres == ')') {
    fechou++;
    contChave--;
  }

  if(contChave < 0) { //se se tiver fechado ) completo e fechar mais um ), quebra
    quebrarChave = true;
  }
}


//validacao, mesmo numero ( e ), e verificar cadeado
const validacao = abriu == fechou && quebrarChave == false;
if (validacao) {
  console.log('Fórmula Certa! ');
 
} else {
  console.log('Fórmula Errada!');
}
