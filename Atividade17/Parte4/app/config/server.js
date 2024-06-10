var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express(); //Executando o express.

app.set('view engine', 'ejs'); //O mecanismo de engine a ser usado.
app.set('views', './app/views'); //Diretório onde os arquivos estão localizados.

app.use(bodyParser.urlencoded({extended: true}));
// consign().include('app/routes').into(app);

consign({cwd:'app'}).include('routes')
.then('config/dbConnection.js')
.then('models')
.into(app);

module.exports = app;

