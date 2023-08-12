const frm = document.querySelector("form")
const dvMoedas = document.querySelector("#divMoedas");
let valorTotal = 0;
const conferir = document.getElementById("conferir");
const gerarNovo = document.getElementById("gerarNovo");
const inSoma = document.getElementById("inSoma");
const span = document.querySelector("span");

const gerarMoedas = () => {
    const num1_00 = Math.ceil(Math.random() * 5)
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)
    const num0_05 = Math.ceil(Math.random() * 5)

    const alt1_00 = "Moedas de um real";
    const alt0_50 = "Moedas de Cinquenta Centavos";
    const alt0_25 = "Moedas de Vinte e Cinco Centavos";
    const alt0_10 = "Moedas de Dez Centavos";
    const alt0_05 = "Moedas de Cinco Centavos";

    criarMoedas(num1_00, "https://i.pinimg.com/originals/24/3b/9a/243b9ab2dd5c1a55457fd983406dc38b.png", alt1_00, "moeda1-00",100);
    criarMoedas(num0_50, "https://cdn.bnws2.com.br/deliamoedas.com.br/image/cache/data/produtos/moedas/nacional/real/50-centavos-real---brasil---2012-01-926x926.jpg", alt0_50, "moeda0-50",50);
    criarMoedas(num0_25, "https://images.tcdn.com.br/img/img_prod/726147/moeda_brasil_25_centavos_1998_fc_2657_1_a72049bdcbf4eb0932631a6194dfd105.jpeg", alt0_25, "moeda0-25",25);
    criarMoedas(num0_10, "https://images.tcdn.com.br/img/img_prod/726147/moeda_colecionavel_brasil_10_centavos_2009_fc_943_1_364ae5518d823b3dc2c440b546d323e2.png", alt0_10, "moeda0-10",10);
    criarMoedas(num0_05, "https://dw0jruhdg6fis.cloudfront.net/producao/26140771/G/moeda_nacional_dn5882.jpg", alt0_05, "moeda0-05",5);
}

const exclusaoDaDivs = () => {
    document.getElementById("moeda1-00").remove();
    document.getElementById("moeda0-50").remove();
    document.getElementById("moeda0-25").remove();
    document.getElementById("moeda0-10").remove();
    document.getElementById("moeda0-05").remove();
    valorTotal = 0;
    gerarMoedas();
      
}

const criarMoedas = (nMoedas, foto, frase, nomeDiv, valor) => {
    div = document.createElement("div")
    dvMoedas.appendChild(div);
    for(i = 0; i < nMoedas; i++) {
        const image = document.createElement("img");
        image.src = foto;
        image.style = 'height: 50px';
        let construirDiv =  nomeDiv;
        div.id = construirDiv;
        div.appendChild(image);
       
    }

      let somarMoedas = nMoedas * valor;
      valorTotal = somarMoedas + valorTotal;

}

const conferirDados = () => {
 
    if(inSoma.value == "") {
        alert("Coloque um valor");
        return;
    } else {
        let numero = Number(inSoma.value)
        valorTotal = valorTotal/100;
        console.log(valorTotal);
        console.log(typeof valorTotal);
        console.log(numero);
        console.log(typeof numero);
        
        if(valorTotal == numero) {
          //  span.textContent = 'Certa resposta!'
            alert("Certa resposta!" + valorTotal);
        }else {
          //  span.textContent = 'Errada'
            alert("Errado! a resposta certa era " + valorTotal );
        }
   
    }
}


conferir.addEventListener("click", conferirDados);
gerarNovo.addEventListener("click", exclusaoDaDivs);
window.addEventListener("load", gerarMoedas);