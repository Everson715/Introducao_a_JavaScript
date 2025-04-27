# Projeto: Exercícios de JavaScript Modularizados

## Descrição
Este projeto contém **21 funções JavaScript** organizadas de forma **modular**, abrangendo diferentes áreas como **operações matemáticas**, **manipulação de arrays e objetos**, **manipulação de strings** e **interatividade com o usuário**. O objetivo principal é servir como material de aprendizado para quem deseja aprimorar seus conhecimentos em **Programação para Web**.

O projeto pode ser executado tanto em **Node.js** quanto em **navegadores modernos**.

## Estrutura do Projeto

```
/
├── src/
│   ├── mathFunctions.js         # Funções matemáticas (soma, IMC, médias, etc.)
│   ├── arrayFunctions.js        # Manipulação de arrays (filtragem, médias, etc.)
│   ├── stringFunctions.js       # Manipulação de strings (inverter, encontrar palavras longas, etc.)
│   ├── interactionFunctions.js  # Interatividade com o usuário (jogos, mensagens)
│   └── index.js                 # Arquivo principal, importa e testa as funções
├── package.json                 # Configuração para execução no Node.js
└── index.html                   # Arquivo HTML para execução no navegador
```

### Descrição dos Arquivos:

- **mathFunctions.js**: Contém funções para operações matemáticas como soma, cálculo de IMC, médias e tabuada.
- **arrayFunctions.js**: Contém funções para manipulação de arrays e objetos, como cálculo de médias de alunos, filtro de carros, livros, etc.
- **stringFunctions.js**: Contém funções para manipulação de strings, como inverter palavras, encontrar palavras longas, entre outras.
- **interactionFunctions.js**: Contém funções para interatividade com o usuário, como o jogo de adivinhar o número e impressão de quadros no console.
- **index.js**: Arquivo principal onde as funções são importadas e testadas.
- **index.html**: Arquivo HTML que executa o projeto em um ambiente de navegador.
- **package.json**: Arquivo de configuração para execução com Node.js, com suporte a módulos.

---

## Como Executar

### 1. Via Node.js

**Requisitos**:  
- Node.js instalado na sua máquina.

**Passos**:
1. Clone ou baixe o projeto para sua máquina local.
2. No terminal, navegue até a pasta do projeto.
3. Execute o comando a seguir para instalar as dependências (se necessário):
    ```bash
    npm install
    ```
4. Para executar o projeto, rode:
    ```bash
    npm start
    ```
    Isso irá executar o arquivo `src/index.js`, que importa e testa todas as funções.

### 2. Via Navegador

**Passos**:
1. Abra o arquivo `index.html` no seu navegador (recomenda-se um navegador moderno como Chrome ou Firefox).
2. Pressione `F12` para abrir as ferramentas de desenvolvedor e vá até o console.
3. Veja os resultados dos testes diretamente no console!

---

## Exemplos de Uso

Aqui estão alguns exemplos de como as funções podem ser usadas:

### Funções Matemáticas

```javascript
import { soma } from './src/mathFunctions.js';
console.log(soma(2, 3)); 

import { media } from './src/mathFunctions.js';
console.log(media(10, 20, 30)); 
```

### Manipulação de Strings

```javascript
import { inverterString } from './src/stringFunctions.js';
console.log(inverterString("hello")); 

import { palavrasLongas } from './src/stringFunctions.js';
console.log(palavrasLongas("Este é um exemplo de uma frase bem longa", 5)); 
```

### Manipulação de Arrays

```javascript
import { pessoaMaisVelha } from './src/arrayFunctions.js';
console.log(pessoaMaisVelha([{nome: 'Ana', idade: 30}, {nome: 'Michael', idade: 45}])); 
```

### Interatividade com o Usuário

```javascript
import { advinheNumero } from './src/interactionFunctions.js';
advinheNumero(); 
```

---

## Autor

Este projeto foi desenvolvido por **José Everson da Silva Santos** com base nas atividades da Universidade de Pernambuco - Professor **Augusto César Oliveira**.