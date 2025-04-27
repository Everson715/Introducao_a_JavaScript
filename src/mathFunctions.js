export function soma(a, b) { return a + b; }
export function isPar(numero) { return numero % 2 === 0; }
export function media(n1, n2, n3) { return (n1 + n2 + n3) / 3; }
export function imc(peso, altura) { return peso / (altura * altura); }
export function calcularDesconto(valor, percentual) { return valor - (valor * (percentual / 100)); }
export function calcularImpostoRenda(salario) {
    if (salario <= 1903.98) return 0;
    else if (salario <= 2826.65) return salario * 0.075;
    else if (salario <= 3751.05) return salario * 0.15;
    else if (salario <= 4664.68) return salario * 0.225;
    else return salario * 0.275;
}
export function calcularMediaArredondada(lista) {
    const soma = lista.reduce((acc, num) => acc + num, 0);
    return Math.round(soma / lista.length);
}
export function gerarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
export function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}
