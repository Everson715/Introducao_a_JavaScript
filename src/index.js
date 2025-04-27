// Importação das funções
import { soma, isPar, media, imc, calcularDesconto, calcularImpostoRenda, calcularMediaArredondada, gerarTabuada, calcularIdade, contarDigitosParesImpares } from './mathFunctions.js';
import { calcularMediaAlunos, verificarPropriedade, calcularPrecoProduto, livrosPorAutor, pessoaMaisVelha, carrosFabricadosDepois } from './arrayFunctions.js';
import { encontrarPalavraMaisLonga, filtrarStringsGrandes, inverterString } from './stringFunctions.js';
import { advinheNumero, imprimirEmQuadro } from './interactionFunctions.js';

// Testes de funções matemáticas
console.log("Soma de 5 + 3:", soma(5, 3));
console.log("É par o número 6?", isPar(6));
console.log("Média de 7, 8, 9:", media(7, 8, 9));
console.log("IMC de 70kg e 1.75m:", imc(70, 1.75));
console.log("Desconto de 1000 com 20%:", calcularDesconto(1000, 20));
console.log("Imposto de Renda para salário 3000:", calcularImpostoRenda(3000));
console.log("Média arredondada da lista [5, 10, 15]:", calcularMediaArredondada([5, 10, 15])); 
console.log("Tabuada do 7:");
gerarTabuada(7);

// Testes de funções de arrays e objetos
console.log("Idade para ano de nascimento 1990:", calcularIdade(1990)); 
console.log("Contagem de dígitos pares e ímpares em 123456:", contarDigitosParesImpares(123456)); 

const alunos = [{ nome: 'Ana', nota: 8 }, { nome: 'Carlos', nota: 7 }];
console.log("Média das notas dos alunos:", calcularMediaAlunos(alunos));

const produto = { nome: 'Celular', preco: 1500 };
console.log("Propriedade 'nome' no objeto produto:", verificarPropriedade(produto, 'nome'));
console.log("Preço do produto com custo 1000, margem 20% e frete 50:", calcularPrecoProduto(1000, 20, 50));

const livros = [
    { titulo: 'O Alquimista', autor: 'Paulo Coelho' },
    { titulo: '1984', autor: 'George Orwell' }
];
console.log("Livros do autor 'Paulo Coelho':", livrosPorAutor(livros, 'Paulo Coelho'));
const pessoas = [{ nome: 'Ana', idade: 30 }, { nome: 'José', idade: 45 }];
console.log("Pessoa mais velha:", pessoaMaisVelha(pessoas));

const carros = [{ modelo: 'Fusca', ano: 1968 }, { modelo: 'Civic', ano: 2020 }];
console.log("Carros fabricados após 2000:", carrosFabricadosDepois(carros, 2000));

// Testes de funções de strings
console.log("Palavra mais longa em 'Eu gosto de programar JavaScript':", encontrarPalavraMaisLonga("Eu gosto de programar JavaScript"));
console.log("Strings com mais de 5 caracteres:", filtrarStringsGrandes(["apple", "banana", "kiwi"]));

console.log("String invertida de 'JavaScript':", inverterString("JavaScript"));

// Testes de interação com o usuário
advinheNumero();

const listaMensagens = ["Bem-vindo!", "Olá, usuário!", "Esperamos que goste do site!"];
imprimirEmQuadro(listaMensagens);