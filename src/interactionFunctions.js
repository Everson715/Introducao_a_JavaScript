export function advinheNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativa;
    let tentativas = 0;
    while (tentativa !== numeroSecreto) {
        tentativa = parseInt(prompt('Adivinhe o número (1 a 100):'));
        tentativas++;
        if (tentativa < numeroSecreto) alert('Maior!');
        else if (tentativa > numeroSecreto) alert('Menor!');
    }
    alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
}
export function imprimirEmQuadro(lista) {
    const tamanhoMax = Math.max(...lista.map(str => str.length));
    console.log('*'.repeat(tamanhoMax + 4));
    lista.forEach(str => {
        console.log(`* ${str.padEnd(tamanhoMax)} *`);
    });
    console.log('*'.repeat(tamanhoMax + 4));
}
