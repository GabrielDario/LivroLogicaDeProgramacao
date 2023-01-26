let palavras = prompt("Digite seu anuncio");

let letra = palavras.charAt(3);
let numPalavras = 0;
console.log(letra);

for (i = 0; i < palavras.length; i++) {
  if (palavras.charAt(i) == " ") {
    numPalavras++
  }
}

console.log(numPalavras)
