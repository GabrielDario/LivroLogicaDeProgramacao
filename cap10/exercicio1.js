let exibirVelas = document.getElementById("exibirVelas");
let trocarVelas = document.getElementById("trocarVelas");
const frm = document.querySelector("form");

exibirVelas.addEventListener("click", (e) => {
    console.log('1');
    e.preventDefault() ;
    let inIdade = frm.inIdade.value;
     
    console.log(inIdade);
    if(inIdade >= 1 && inIdade <= 120) {
        alert('Idade Válida');
    } else {
        alert('Idade Inválida');
        return;
    }

    frm.inIdade.value = "" ;
    frm.inIdade.focus() ;
});

trocarVelas.addEventListener("click", (e) => {
    console.log('2');
});
