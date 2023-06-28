const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
    let clube // variável que irá receber o nome do clube
    if (frm.rbVasco.checked) { // verifica qual radiobutton está selecionado
        clube = "Vasco"
    } else if (frm.rbAvai.checked) {
        clube = "Avai"
    } else {
        clube = "Crb"
    }
    // define as classes de dvTitulo: row e cores do clube
    dvTitulo.className = `row cores-${clube}`
    // modifica a imagem de acordo com a seleção do cliente
    imClube.src = `img/${clube.toLowerCase()}.png`
    imClube.className = "img-fluid" // muda o estilo para exibir a imagem
    imClube.alt = `Símbolo do ${clube}` // modifica atributo alt
    localStorage.setItem("clube", clube) // salva no navegador a escolha do cliente
}

const verificarClube = () => {

    if (localStorage.getItem("clube")) { // se já estiver salvo algum clube
        const clube = localStorage.getItem("clube") // obtém o nome do clube
        if (clube == "Vasco") { // conforme o clube, marca checked
            frm.rbVasco.checked = true
        } else if (clube == "Avai") {
            frm.rbAvai.checked = true
        } else {
            frm.rbCRB.checked = true
        }
        trocarClube(); // chama function que troca imagem e cores
    }
}


// associa ao evento change de cada botão do form a função trocarClube
frm.rbVasco.addEventListener("change", trocarClube)
frm.rbAvai.addEventListener("change", trocarClube)
frm.rbCRB.addEventListener("change", trocarClube)

window.addEventListener("load", verificarClube)