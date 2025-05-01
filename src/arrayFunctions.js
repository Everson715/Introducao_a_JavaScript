
export function livrosPorAutor(livros, autor) {
    return livros.filter(livro => livro.autor === autor);
}

export function pessoaMaisVelha(pessoas) {
    return pessoas.reduce((maisVelha, pessoa) => pessoa.idade > maisVelha.idade ? pessoa : maisVelha).nome;
}

export function carrosFabricadosDepois(carros, ano) {
    return carros.filter(carro => carro.ano > ano);
}

export function calcularPrecoProduto(custo, margemLucro, frete) {
    return custo + (custo * (margemLucro / 100)) + frete;
}

export function verificarPropriedade(objeto, propriedade) {
    return objeto.hasOwnProperty(propriedade);
}
export function calcularMediaAlunos(alunos) {
    const total = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
    return total / alunos.length;
  }