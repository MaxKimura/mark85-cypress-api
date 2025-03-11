
# 🚀 Testando API REST com MongoDB e RabbitMQ em Cypress! 🤖🔥

Olá! 👋  
Projeto de testes com **API REST** utilizando o **Cypress**, uma ferramenta poderosa para automação de testes. Os testes de API desempenham um papel crucial no processo de desenvolvimento de software, garantindo que a aplicação funcione conforme o esperado e facilite a comunicação entre diferentes componentes.
Abaixo, compartilho um resumo do que foi abordado e os passos necessários para configurar e executar o projeto.

---

## 🔎 **O que aprendi?**

- Como construir um projeto de testes para API em Cypress.
- Utilizar **Custom Commands** para construir a camada de serviços.
- Construir **tasks** do Cypress para conectar ao banco de dados.
- Como consumir uma API no modo hardcore 😱 sem Swagger.
- Testar requisições HTTP (Post, Get, Put e Delete).
- Trabalhar com **fixtures** para request e response.
- Testar e adicionar tokens em requisições HTTP.
- Interceptação e validação de dados na fila de mensageria.

---

## 🛠️ **Passos para configurar e executar o projeto**

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** instalados na sua máquina. Você pode verificar a instalação com os seguintes comandos:

- node -v
- npm -v

---

### 1. **Criar um diretório**
   - Crie uma pasta para o projeto:
     ```bash
     mkdir mark85-cypress-api
     cd testes-chatbot-cypress
     ```

### 2. **Instalar dependências**
   - Instale as dependências do projeto Node.js (se ainda não tiver um `package.json`) para os repositórios web e api:
     ```bash
     npm install
     ```

### 3. **Instalar o Cypress**
   - Instale o Cypress como dependência de desenvolvimento no resppsitório web:
     ```bash
     npm install cypress --save-dev
     ```

### 4. **Rodar a aplicação local**
   - O projeto roda localmente nos repositórios web e api, inicie com:
     ```bash
     npm run dev
     ```

### 5. **Executar o Cypress**
   - Abra o Cypress no modo interativo:
     ```bash
     npx cypress open
     ```
   - Ou execute os testes em modo **headless** (sem interface gráfica):
     ```bash
     npx cypress run
     ```

---

## 📌 **Instrutor do curso/projeto 👨‍🏫**
   - Quem lecionou o conteúdo do curso foi o [Fernando Papito](https://www.linkedin.com/in/qapapito/), que possui uma didática incrível, e traz projetos com problemas reais do dia a dia
