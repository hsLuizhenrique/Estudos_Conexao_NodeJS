const express = require('express');
const rotas = express();
const { cadastrar, buscarAutor } = require('./controladores/autores');

rotas.use(express.json());

rotas.post('/autor', cadastrar)
rotas.get('/autor/:id', buscarAutor)


module.exports = rotas