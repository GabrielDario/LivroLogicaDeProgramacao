
let visitas = localStorage.getItem("visitas");

console.log(typeof visitas)
if(visitas == 0) {
  alert('Bem vindo pela primeira vez no nosso site!');
  visitas = Number(visitas);
  visitas ++;
  visitas = visitas.toString();
  localStorage.setItem("visitas", visitas);
} else {
  console.log(visitas)
  alert('Bem vindo,essa é a ' +  visitas + 'º vez que voce visita' );
  visitas = Number(visitas);
  visitas++;
  visitas = visitas.toString();
  localStorage.setItem("visitas", visitas);
}
