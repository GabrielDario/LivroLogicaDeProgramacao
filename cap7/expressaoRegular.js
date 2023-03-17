const palavra = '#Senha_123!';

const vetor1 = palavra.match(/[a-z]/g);
const vetor2 = palavra.match(/[A-Z]/g);
const vetor3 = palavra.match(/[0-9]/g);
const vetor4 = palavra.match(/\W|_/g);
const vetor5 = palavra.match(/[M-Z]/g);

console.log(vetor1); //esenha
console.log(vetor2); // S
console.log(vetor3); // 123
console.log(vetor4); // ESPECIAIS
console.log(vetor5);  //S

const senha = 'ABACATE';

const senha1 = senha.replace("A", "X");
const senha2 = senha.replace(/A/g, "X");

console.log(senha1); //XBACATE
console.log(senha2); //XBXCXTE

console.log('Hoje: &{hh}');

