const hoje = new Date();
const amanha = new Date();
const dia = amanha.getDate();

amanha.setDate( dia + 1);

console.log('Hoje: ' + hoje + '\n' + 'Amanha: ' + amanha);

const anoAtual = new Date().getFullYear();
const comemora = prompt('Quantos anos voce comemora em' + anoAtual + '?');
const anoNas = anoAtual - comemora;
alert('Ahh.. você nasceu em ' + anoNas)  
