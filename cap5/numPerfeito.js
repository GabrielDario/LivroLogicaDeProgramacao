var prompt = require("prompt-sync")()


let num = Number(prompt("Digite um número: "));

let somatorioDivisores = 0;
console.log(`Divisores de ${num}:`);
for (i = 1; i < num; i++) {

  if (num % i == 0) {
    console.log(`${i}`);
    somatorioDivisores = somatorioDivisores + i;
  }
}
console.log(`Soma ${somatorioDivisores}`)
if (num == somatorioDivisores) {
  console.log(`${num} É um número perfeito.`)
} else {
  console.log(`${num} Não é um número perfeito.`)
}

