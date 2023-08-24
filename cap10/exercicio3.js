
const frm = document.querySelector("form");
let clube = document.getElementById("clube");

let adicionar = document.getElementById("adicionar");
let montar = document.getElementById("montar");
let zerar = document.getElementById("zerar");

let span = document.getElementById("span");
const tabela = document.querySelector("table");

let clubes = [];
adicionar.addEventListener("click", (e) => {
    e.preventDefault();
    clube = frm.clube.value;
    if (clube == "") {
        alert("Preencha o campo!");
        return;
    } else {
            const h5 = document.createElement("h5");
            const texto = document.createTextNode(clube);
            h5.appendChild(texto);
            span.appendChild(h5);
            alert("Time adicionado!");
            clubes.push(clube);
            frm.reset();
    }
});

montar.addEventListener("click", (e) => {
    if(clubes.length % 2 == 0) {
        tabela.innerHTML = ""; 
        for(i = 0; i <= clubes.length/2; i = i + 2) {
            const linha = tabela.insertRow(-1);

            const col1 = linha.insertCell(0) 
            const col2 = linha.insertCell(1)
            const col3 = linha.insertCell(2)

            col1.innerText = clubes[i] ;
            col2.innerText = " X ";
            col3.innerText = clubes[i+1];
        }
    } else {
        alert("Números Impares de times!");
    
    }
});

zerar.addEventListener("click", (e) => {
    span.innerHTML = ""; 
    tabela.innerHTML = "";
    clubes = [];
});