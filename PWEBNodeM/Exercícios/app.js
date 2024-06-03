var app = require('./app/config/server'); //Carregando o módulo do servidor.

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaAdicionarUsuario = require('./app/routes/adicionar-usuario');
rotaAdicionarUsuario(app);

var rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);

var rotaCursos = require('./app/routes/cursos');
rotaCursos(app);

var rotaProfessores = require('./app/routes/professores');
rotaProfessores(app);

// Poderia executar assim também
// var rotaAdicionarUsuario = require('./app/routes/adicionar-usuario') (app);

app.listen(3000, function()
{
    console.log("Servidor iniciado.");
});