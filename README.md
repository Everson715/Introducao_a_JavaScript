# Projeto: Exercícios de JavaScript Modularizados

## Descrição
Este repositório contém **21 funções JavaScript** organizadas de forma **modular**, cobrindo quatro categorias principais:

- **Operações matemáticas**: soma, média, IMC, tabuada, etc.
- **Manipulação de arrays e objetos**: filtros, cálculos de média, busca de elementos, etc.
- **Manipulação de strings**: inverter texto, encontrar palavras longas, etc.
- **Interatividade com o usuário**: jogo de adivinhar número, renderização de mensagens dinâmicas.

O objetivo é servir como um conjunto de exercícios práticos para quem deseja aprimorar habilidades de **programação para web** usando módulos ES6.

---

## Estrutura do Projeto

```
/
├── src/
│   ├── mathFunctions.js         # Funções matemáticas (soma, média, IMC...)
│   ├── arrayFunctions.js        # Funções de array e objeto
│   ├── stringFunctions.js       # Funções de manipulação de string
│   ├── interactionFunctions.js  # Jogo e renderização de mensagens
│   └── index.js                 # Ponto de entrada no navegador (associa botões, testes)
├── styles.css                   # Estilos para página HTML
├── index.html                   # Carrega o bundle ES Module no navegador
└── package.json                 # Configuração para execução via Node.js
```

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14+)
- Navegador moderno (Chrome, Firefox, Edge) para executar módulos ES6

---

## Como Executar

### 1. Localmente via Node.js

1. Clone o repositório:
   ```bash
   git clone <URL-do-repo>
   cd <nome-do-projeto>
   ```
2. Instale dependências (não há dependências externas, mas cria o `node_modules`):
   ```bash
   npm install
   ```
3. Execute o script de teste:
   ```bash
   npm start
   ```
   Isto executará `src/index.js` no Node.js e exibirá todos os `console.log` de teste.

### 2. No Navegador

1. Abra `index.html` em um servidor local (para suportar módulos ES6):
   - Usando [Live Server no VSCode](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   - Ou com `http-server`:
     ```bash
     npm install -g http-server
     http-server .
     ```
2. Acesse `http://localhost:8080` (ou porta indicada).
3. No navegador, abra o Console de Desenvolvedor (`F12`) para ver os testes.
4. Clique nos botões “Iniciar Jogo de Adivinhação” e “Exibir Mensagem” para testar interatividade.

---

## Exemplos de Uso

No Node.js ou via Console do Navegador:

```js
import { soma, media, imc } from './src/mathFunctions.js';
console.log(soma(2, 3));         // 5
console.log(media(5, 7, 10));   // 7.333...
console.log(imc(70, 1.75));     // ~22.86

import { inverterString } from './src/stringFunctions.js';
console.log(inverterString("Olá Mundo")); // "odnuM álO"

import { pessoaMaisVelha } from './src/arrayFunctions.js';
console.log(
  pessoaMaisVelha([
    { nome: 'Ana', idade: 30 },
    { nome: 'Beto', idade: 40 }
  ])  // 'Beto'
);

import { advinheNumero } from './src/interactionFunctions.js';
advinheNumero(); // Inicia o jogo no prompt/alert
```

---

## Autor
Este projeto foi desenvolvido por **José Everson da Silva Santos** com base nas atividades da Universidade de Pernambuco - Professor **Augusto César Oliveira**.