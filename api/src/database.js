const mongoose = require('mongoose');

async function connectToDatabase() {
    mongoose.connect(
        process.env.DATABASE_URL, 
        {
        useNewUrlParser: true,
        useUnifiedTopology: true
        }
    );

    const db = mongoose.connection;
    db.on('error', (error) => console.error(error))             // em caso de erro
    db.once('open', () => console.log('Conectado ao MongoDB')); // executar uma vez ao abrir a conexao
}

module.exports = connectToDatabase;