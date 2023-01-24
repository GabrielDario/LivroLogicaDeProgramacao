const carros = [];
carros.push({modelo: "Sandero",preco: 46500});
carros.push({ modelo: "Palio", preco: 37800 });

for(const carro of carros) {
  const {modelo,preco} = carro;
  console.log(`${carro.modelo} - R$: ${carro.preco}`)
}

console.log(carros)

////////////////////Desestruturação

const pacientes = ["Ana", "Carlos", "Sofia", "Isabelle"];
const [a,b,c] = pacientes;

console.log(a); //ANA
console.log(b); //CARLOS
console.log(c); //SOFIA
console.log("")
const [atender,proximo,... outros ]= pacientes;
console.log(atender);

console.log(outros); // Sofia, Isabelle 

const carro = {modelo: "Corsa", preco: 59500}
const carro2 = {...carro, ano: 2002};

console.log(carro2);

const pessoas = ["Joao", "Sofia"];
const pessoas2 = ["Ana",...pessoas]; //primeira da lista
const pessoas3 = [...pessoas2, "Fagundes",]; //ultimo  da lista
console.log("");
console.log(pessoas3);

//
const idades = [12,16,11,8,1];
let maiorDeIdade = false;  //FLAG
for(const idade of idades) {
  if(idade > 18) {
    maiorDeIdade = true;
  }
}

if(maiorDeIdade) {
 console.log(`A MAIOR DE IDADE!`);
}else {
  console.log(`Não HÁ MAIOR DE IDADE!`);
}

//MAP FILTER REDUCE

const numeros = [2,6,15,7];
const dobro = numeros.map(num => num * 2);
const pares = numeros.filter(num => num%2 == 0);
const acumulador = numeros.reduce((acumulador, num) => acumulador + num,0);
console.log(dobro.join(", ")); //dobrado todos
console.log(pares.join(", ")); //somentes filtando por pares
console.log(acumulador); //somentes filtando por pares