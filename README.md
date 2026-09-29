# 🎮 Adivinhe — Jogo de Palavras

Um jogo interativo de adivinhação de palavras desenvolvido com **React, TypeScript e Vite**. O objetivo é descobrir a palavra secreta utilizando dicas e tentando letras antes que o limite de tentativas seja atingido.

O projeto foi desenvolvido como uma aplicação prática para explorar conceitos fundamentais do desenvolvimento frontend, incluindo componentes reutilizáveis, gerenciamento de estado e lógica de interação.

---

## ✨ Funcionalidades

* 🎯 **Palavras aleatórias:** cada partida apresenta um novo desafio.
* 💡 **Sistema de dicas:** receba uma pista para ajudar a descobrir a palavra.
* 🔤 **Tentativas por letras:** informe uma letra por vez para revelar a palavra.
* 📊 **Contador de tentativas:** acompanhe quantas tentativas foram utilizadas.
* ✅ **Validação de entradas:** impede o envio de caracteres inválidos ou letras repetidas.
* 🏆 **Condição de vitória:** descubra todas as letras da palavra para vencer.
* ❌ **Condição de derrota:** o jogo termina quando o limite de tentativas é atingido.
* 🔄 **Reiniciar partida:** comece um novo desafio a qualquer momento.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia                                    | Finalidade                                            |
| --------------------------------------------- | ----------------------------------------------------- |
| [React](https://react.dev/)                   | Construção da interface e gerenciamento de estado     |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática e maior segurança no desenvolvimento |
| [Vite](https://vite.dev/)                     | Ambiente de desenvolvimento e build                   |
| CSS Modules                                   | Estilização isolada dos componentes                   |
| ESLint                                        | Padronização e análise estática do código             |

---

## 📁 Estrutura do projeto

```text
primeiro-projeto/
├── public/
│   └── icon.svg
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── restart.svg
│   │   └── tip.svg
│   ├── components/
│   │   ├── Button/
│   │   ├── Header/
│   │   ├── Input/
│   │   ├── Letter/
│   │   ├── LettersUsed/
│   │   └── Tip/
│   ├── utils/
│   │   └── words.ts
│   ├── App.tsx
│   ├── app.module.css
│   ├── global.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

### Organização

* **components:** componentes reutilizáveis da interface, cada um com sua própria estilização.
* **utils/words.ts:** definição das palavras e dicas utilizadas nos desafios.
* **App.tsx:** componente principal, responsável pela lógica e pelo gerenciamento do estado do jogo.
* **global.css:** estilos globais da aplicação.
* **app.module.css:** estilos específicos da aplicação.

---

## 🚀 Como executar o projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/) instalado.
* npm (gerenciador de pacotes incluído com o Node.js).
* Git para clonar o repositório.

### 1. Clone o repositório

```bash
git clone https://github.com/brenodev2007/Adivinhe-jogo.git
```

### 2. Acesse a pasta do projeto

```bash
cd Adivinhe-jogo/primeiro-projeto
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O Vite disponibilizará o endereço local no terminal. Acesse-o pelo navegador para começar a jogar.

---

## 📜 Scripts disponíveis

| Comando           | Descrição                                                |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento                     |
| `npm run build`   | Verifica os tipos TypeScript e gera a versão de produção |
| `npm run lint`    | Executa a análise estática do código                     |
| `npm run preview` | Executa uma prévia local da versão de produção           |

---

## 🧠 Conceitos praticados

Este projeto permite explorar conceitos importantes da programação frontend:

* Componentização e reutilização de código.
* Hooks do React (`useState` e `useEffect`).
* Manipulação de eventos e formulários.
* Renderização condicional.
* Manipulação de arrays e strings.
* Tipagem de propriedades e estados com TypeScript.
* Separação de responsabilidades entre componentes.
* Organização de arquivos e estilos com CSS Modules.

---

## 👨‍💻 Autor

**Breno Soriani**

* GitHub: [@brenodev2007](https://github.com/brenodev2007)

---

<p align="center">
  Desenvolvido para praticar lógica de programação e desenvolvimento de interfaces com React e TypeScript.
</p>
