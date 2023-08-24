let exibirVelas = document.getElementById("exibirVelas");
let trocarVelas = document.getElementById("trocarVelas");
const frm = document.querySelector("form");
let inIdade;
let contador = 0;

exibirVelas.addEventListener("click", (e) => {
    e.preventDefault();
    inIdade = frm.inIdade.value;
    contador = 1;
    if (inIdade >= 1 && inIdade <= 120) {
        let pai = document.getElementById("imagens");
        pai.innerHTML = "";
        for (let i = 0; i < inIdade.length; i++) {
            const primeira = document.createElement("img");
            const path = "img/" + contador + "-" + inIdade[i] + ".png";
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
    e.preventDefault();

    if (contador == 0) {
        alert('Exibe as velas primeiros!');
        return;
    } else {
        contador++;
        if(contador == 4) {
            contador = 1;
        }
        let pai = document.getElementById("imagens");
        pai.innerHTML = "";
        for (let i = 0; i < inIdade.length; i++) {
            const primeira = document.createElement("img");
            const path = "img/" + contador + "-" + inIdade[i] + ".png";
            primeira.src = path;
            pai.appendChild(primeira);
        }
    }
});
