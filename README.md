# API de Videoteca 🎥

Este repositório contém o backend de uma API simples para gerenciamento de uma videoteca, desenvolvida com **Node.js**, **Express**, **Mongoose** e **MongoDB**, seguindo a arquitetura **MVC**.

## 🚀 Tecnologias Utilizadas
- **Node.js**: Plataforma para execução de JavaScript no servidor.
- **Express**: Framework minimalista para criação de servidores web.
- **Mongoose**: Biblioteca para modelagem de dados com MongoDB.
- **MongoDB**: Banco de dados NoSQL para armazenamento das informações.

## 📂 Estrutura do Projeto
```plaintext
src/
├── controllers/   # Lógica para manipulação das requisições
├── middlewares/   # Validações e tratamentos
├── models/        # Modelos e esquemas do Mongoose
├── routes.js      # Definição das rotas
├── database.js    # Configurações de conexão com o banco MongoDB
└── server         # Configuração e inicialização do servidor

📖 Funcionalidades
Cadastro, leitura, atualização e exclusão de filmes (CRUD).
Organização de código com arquitetura MVC.
Validação e manipulação de dados com middlewares.
Integração com MongoDB usando Mongoose.

⚙️ Como Executar
Clone o repositório:

bash
Copy code
git clone https://github.com/leandroffdev/projeto_videoteca.git
cd nome-repositorio
Instale as dependências:

bash
Copy code
npm install
Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto com as seguintes informações:

PORT=3000
Inicie o servidor:

bash
Copy code
npm start
Acesse a API:

URL base: http://localhost:3000

Rotas disponíveis:
GET /videos - Lista todos os filmes.
POST /videos - Adiciona um novo filme.
GET /videos/:id - Detalha um filme pelo ID.
PUT /videos/:id - Atualiza um filme pelo ID.
DELETE /videos/:id - Exclui um filme pelo ID.

🛠️ Melhorias Futuras
Implementação de autenticação e autorização.
Adicionar testes automatizados.
Documentação da API com Swagger.
Feito com ❤️ para aprendizado e prática de backend!
