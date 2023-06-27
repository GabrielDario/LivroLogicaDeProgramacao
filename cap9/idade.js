//Testando no jsitor
if (typeof localStorage !== 'undefined') {
    const item = localStorage.setItem("Idade", 17);
  }
  const idade = localStorage.getItem("Idade")
  const soma = idade +1; 
  const somaCerto = Number(idade) + 1;
  
  console.log(idade);
  console.log(soma);
  console.log(somaCerto);                                    