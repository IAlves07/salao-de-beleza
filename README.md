# Beauty Salon - Website & Sistema de Agendamento

> Um site responsivo para um salão de beleza premium, integrando uma landing page ncom um sistema funcional de agendamento de horários via JavaScript.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 💻 Sobre o Projeto

Este projeto foi desenvolvido como parte dos meus estudos em **Desenvolvimento Full Stack**. O objetivo principal foi criar uma aplicação front-end sem o uso de frameworks como React ou Vue, focando puramente na lógica do **Vanilla JavaScript** e estilização avançada com **CSS**.

O sistema simula a experiência real de um cliente: desde conhecer os serviços na página inicial até a confirmação de um agendamento com escolha de profissional, data e hora.

## 🛠 Tecnologias Utilizadas

* **HTML5 Semântico:** Estruturação correta do conteúdo (`<nav>`, `<section>`, etc).
* **CSS3 Moderno:**
    * **Flexbox & Grid Layout:** Para organização dos elementos e cards de serviços.
    * **Variáveis CSS (:root):** Para manutenção consistente da paleta de cores.
    * **Media Queries:** Design totalmente responsivo (Mobile, Tablet e Desktop).
    * **Animações:** Uso de `@keyframes` para transições suaves entre as etapas.
* **JavaScript (ES6+):**
    * **Manipulação do DOM:** Criação dinâmica de elementos HTML
    * **Arrays e Objetos:** Armazenamento dos dados dos profissionais e estado do agendamento.
    * **Lógica de Validação:** Bloqueio de datas passadas no calendário.
    * **Event Listeners:** Interatividade na seleção de cards e botões.
* **Font Awesome:** Ícones vetoriais para interface.

## ⚙️ Funcionalidades

### 1. Landing Page (Institucional)
* Apresentação da marca com design "Dark Mode" elegante.
* Galeria de serviços com preços.
* Botões de Call-to-Action (CTA) direcionando para o agendamento.

### 2. Sistema de Agendamento (Passo a Passo)
O fluxo de agendamento foi construído com lógica de **"Wizard"** (etapas):

1.  **Escolha do Profissional:**
    * A lista de profissionais é gerada dinamicamente via JavaScript a partir de um Array de Objetos.
    * Ao clicar, o profissional é salvo no objeto temporário `agendamento`.
2.  **Seleção de Data e Hora:**
    * Validação automática: O calendário (`input type="date"`) bloqueia dias anteriores ao atual.
    * Geração dinâmica de botões de horários disponíveis.
3.  **Resumo e Confirmação:**
    * Validação final de formulário (nome e serviço).
    * Exibição de um resumo claro com os dados escolhidos antes da confirmação.

## 📂 Estrutura do Código

O projeto segue uma organização limpa de arquivos:
├── index.html # Página Inicial (Landing Page) ├── scheduling.html # Página do Sistema de Agendamento ├── style.css # Estilos da Home ├── scheduling.css # Estilos específicos do Agendamento ├── scheduling.js # Lógica do Agendamento (DOM, Objetos, Funções) └── img/ # Pasta com os assets (imagens)

## 🧠 Aprendizados Destacados

Durante o desenvolvimento, foquei em conceitos essenciais da linguagem:

- Lógica: Gerenciamento das escolhas do usuário através de um objeto global `agendamento`, simulando o conceito de *State* de frameworks modernos.
- **Manipulação de Arrays:** Uso do método `.forEach()` para gerar as listas de profissionais e horários dinamicamente, evitando repetição de código.
- **Data e Hora:** Configuração de restrições no calendário utilizando `new Date()` e `.toISOString()`.
- **CSS Responsivo:** Adaptação do layout via Grid Template Columns, alternando entre 3 colunas no Desktop e 1 no Mobile.

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU-USUARIO/luxe-salon.git](https://github.com/SEU-USUARIO/luxe-salon.git)
