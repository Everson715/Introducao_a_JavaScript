import * as MathFunctions from './mathFunctions.js';
import * as ArrayFunctions from './arrayFunctions.js';
import * as StringFunctions from './stringFunctions.js';
import * as InteractionFunctions from './interactionFunctions.js';

// Funções matemáticas
console.log("Soma de 3 + 5:", MathFunctions.soma(3, 5));
console.log("Média de 7, 8, 9:", MathFunctions.media(7, 8, 9));

// Funções de string
console.log("String invertida:", StringFunctions.inverterString("Javascript"));

// Funções de array
console.log("Nome da pessoa mais velha:", ArrayFunctions.pessoaMaisVelha([{nome:'Ana',idade:30},{nome:'Beto',idade:40}]));

// Funções de interação
InteractionFunctions.pedirNome();  // Chama a função para pedir o nome e saudação
InteractionFunctions.advinheNumero();  // Chama a função para o jogo de adivinhar o número

// Exemplo de como imprimir em quadro
InteractionFunctions.imprimirEmQuadro(['Texto 1', 'Texto 2', 'Texto 3']);
