let dividirColorir = document.getElementById("dividirColorir");
let span = document.getElementById("span");
let nome;
const frm = document.querySelector("form");

dividirColorir.addEventListener("click", (e) => {
      span.innerHTML = "";  
    console.log("Foi");
    e.preventDefault();
    nome = frm.nome.value;
    if (nome == "") {
        alert("Preencha o campo!")
    } else {
        let separar = nome.split(" ");

        separar.forEach(element => {
            const h3 = document.createElement("h3");
            const texto = document.createTextNode(element);
            
            const letters = '0123456789ABCDEF';
            let color = '#';
            
            for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }

            h3.style.color = color;
            h3.appendChild(texto);
            span.appendChild(h3);
        });

    }

});