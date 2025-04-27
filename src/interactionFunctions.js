export function saudacao(nome) {
    const mensagem = `Olá, ${nome}! Seja bem-vindo ao nosso projeto!`;
    alert(mensagem);
    return mensagem;
  }
  
  export function pedirNome() {
    const nome = prompt("Qual é o seu nome?");
    if (nome) {
      saudacao(nome);
    } else {
      alert("Você não informou um nome!");
    }
  }
  
  export function advinheNumero() {
      const numeroSecreto = Math.floor(Math.random() * 50) + 1;
      let tentativa;
      let tentativas = 0;
      let acertou = false;
      
      while (tentativas < 3 && !acertou) {
          tentativa = parseInt(prompt('Adivinhe o número (1 a 50):'));
          tentativas++;
          
          if (tentativa < numeroSecreto) {
              alert('Maior!');
          } else if (tentativa > numeroSecreto) {
              alert('Menor!');
          } else {
              acertou = true;
              alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
          }
      }
  
      if (!acertou) {
          alert(`Você não acertou! O número secreto era ${numeroSecreto}.`);
          const tentarNovamente = confirm('Deseja tentar novamente?');
          if (tentarNovamente) {
              advinheNumero();
          }
      }
  }
  
  export function imprimirEmQuadro(lista) {
      const tamanhoMax = Math.max(...lista.map(str => str.length));
      console.log('*'.repeat(tamanhoMax + 4));
      lista.forEach(str => {
          console.log(`* ${str.padEnd(tamanhoMax)} *`);
      });
      console.log('*'.repeat(tamanhoMax + 4));
  }