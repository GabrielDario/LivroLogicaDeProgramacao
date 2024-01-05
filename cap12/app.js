const express = require('express');
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send('Olá... Bem-vindo!');

});

// Arquivo com rotas para o cadastro de livros
const livros = require('./livros');
app.use('/livros', livros); // identificação da rota e da const (require) associada

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});