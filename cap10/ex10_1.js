const frm = document.querySelector("form") // obtém elementos da página
const dvQuadro = document.querySelector("#divQuadro")
frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio do form
    const tarefa = frm.inTarefa.value // obtém o conteúdo digitado
    const h5 = document.createElement("h5") // cria o elemento HTML h5
    const texto = document.createTextNode(tarefa) // cria um texto

    h5.appendChild(texto) // define que texto será filho de h5
    dvQuadro.appendChild(h5) // e que h5 será filho de divQuadro
    frm.inTarefa.value = "" // limpa o campo de edição
    frm.inTarefa.focus() // joga o cursor neste campo
})

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") // obtém tags h5 da página
    if (tarefas.length == 0) {
        alert("Não há tarefas para selecionar") // se não há tarefas, exibe alerta
        return // e retorna
    }
    let aux = -1 // variável auxiliar para indicar linha selecionada
    // percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for (let i = 0; i < tarefas.length; i++) {
        // se tag é da class tarefa-selecionada (está selecionada)
        if (tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal" // troca para normal
            aux = i // muda valor da variável auxiliar
            break // sai da repetição
        }
    }
    // se a linha que está selecionada é a última, irá voltar para a primeira
    if (aux == tarefas.length - 1) {
        aux = -1
    }

    tarefas[aux + 1].className = "tarefa-selecionada" // muda estilo da próxima linha
})