require('dotenv').config();                     // Biblioteca para usar variáveis de ambiente
const express = require('express');
const routes = require('./routes.js');
const connectToDatabase = require('./database.js');
const cors = require('cors');

connectToDatabase();        // Conectando ao database

const app = express();
app.use(cors());              // Permite requisições de outros domínios
app.use(express.json());      // Usando o express para lidar com requisições JSON
app.use(routes);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});