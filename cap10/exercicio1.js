let exibirVelas = document.getElementById("exibirVelas");
let trocarVelas = document.getElementById("trocarVelas");
const frm = document.querySelector("form");

let primeiraVela = ['img/1-2.png'];
let segundaVela = ['img/1-5.png'];
let terceiraVela = ['img/1-5.png'];
let contador = 1;
exibirVelas.addEventListener("click", (e) => {
    e.preventDefault();
    let inIdade = frm.inIdade.value;



    if (inIdade >= 1 && inIdade <= 120) {
  
        let pai = document.getElementById("imagens");
        pai.innerHTML = "";
        for(let i = 0; i < inIdade.length; i++) {
            const primeira = document.createElement("img");
            const path =  "img/" + contador + "-" + inIdade[i] + ".png";
            primeira.src = path;
            pai.appendChild(primeira);
            
        }
      

    } else {
        alert('Idade Inválida.\nInsira entre 1 e 120');
        return;
    }

    frm.inIdade.value = "";
    frm.inIdade.focus();
});

trocarVelas.addEventListener("click", (e) => {
});
