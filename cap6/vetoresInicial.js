const cidades = [`Palhoça`, `Sao Jose`];

console.log(cidades);//Palhoça , Floripa

cidades.push(`Floripa`); //Adiciona ultimo ->

console.log(cidades);//Palhoça ,Sao Jose, Floripa

cidades.unshift(`Biguaçu`); //Adiciona primeiro ->

console.log(cidades); //Biguaçu, Palhoça ,Sao Jose, Floripa

cidades.pop(); //Tira o ultimo

console.log(cidades);//Biguaçu, Palhoça ,Sao Jose

cidades.shift(); //Tira o primeiro

console.log(cidades); //Palhoça ,Sao Jose

//SPLICE MODIFICA O VETOR ORIGINAL JÁ O SPLICA NÃO

const letra = [`A`, `B`, `C`, `D`];

const letra2 = letra.slice(-2); // PEGA OS DOIS ULTIMOS (FRENTE PARA TRAS)
console.log(letra2); //C D

const letra3 = letra.slice(0,-1); // do primeiro até o penultimo
console.log(letra3); //A B C

console.log(letra); 
const letra4 = letra.splice(0, 2); // OS DOIS PRIMEIROS, NO (2) PARA
console.log(letra); 
console.log(letra4); //A B
