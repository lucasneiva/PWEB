var express = require('express');
var app = express(); //Executando o express.

app.set('view engine', 'ejs'); //O mecanismo de engine a ser usado.
app.set('views', './app/views'); //Diretório onde os arquivos estão localizados.

module.exports = app;