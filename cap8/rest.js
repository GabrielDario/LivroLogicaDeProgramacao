const calcularMedia = (...notas) => {
    const num = notas.length
    if (num == 0) {
        console.log('Informe no mínimo,uma nota');
        return
    }

    let soma = 0;

    for(const nota of notas) {
        soma += soma;
    }

    const media = soma/num;
    console.log('Média: ${media.toFixed(1)}')

}