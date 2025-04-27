# Projeto: Exercícios de JavaScript (Modularizado)

## Descrição
Este projeto é uma coleção de **21 funções JavaScript** organizadas de forma **modular**, destinadas ao aprendizado de **Programação para Web**.

As funções estão separadas por categorias:
- Operações matemáticas
- Manipulação de arrays e objetos
- Manipulação de strings
- Interatividade com usuário

Projeto pronto para execução em **Node.js** ou em **Navegadores** modernos.

---

## Estrutura do Projeto

```
/
├── src/
│   ├── mathFunctions.js
│   ├── arrayFunctions.js
│   ├── stringFunctions.js
│   ├── interactionFunctions.js
│   └── index.js
├── package.json
└── index.html
```

### Descrição dos Arquivos:
- **mathFunctions.js**: Soma, IMC, descontos, médias, tabuada...
- **arrayFunctions.js**: Médias de alunos, filtro de carros e livros...
- **stringFunctions.js**: Inverter strings, encontrar palavras longas...
- **interactionFunctions.js**: Jogo de adivinhar número e imprimir quadros...
- **index.js**: Importa todas as funções e executa exemplos de testes.
- **index.html**: Executa o projeto em ambiente de navegador.
- **package.json**: Configuração para execução Node.js com suporte a modules.

---

## Como Executar

### 1. Via Node.js

**Requisitos:**
- Node.js instalado

**Passos:**
```bash
npm install   # (opcional, não há dependências)
npm start     # Executa o arquivo src/index.js
```

### 2. Via Navegador

**Passos:**
- Abra o arquivo `index.html` em um navegador moderno.
- Pressione `F12` para abrir o console.
- Veja os resultados dos testes no console!

---

## Exemplos de Uso

```javascript
import { soma } from './mathFunctions.js';
console.log(soma(2, 3)); // Resultado: 5

import { inverterString } from './stringFunctions.js';
console.log(inverterString("hello")); // Resultado: "olleh"

import { pessoaMaisVelha } from './arrayFunctions.js';
console.log(pessoaMaisVelha([{nome:'Ana', idade:30}, {nome:'Carlos', idade:45}])); // Resultado: "Carlos"
```

---

## Autor
Projeto baseado nas atividades da Universidade de Pernambuco - Professor Augusto César Oliveira.

Desenvolvido por: **José Everson da Silva Santos**