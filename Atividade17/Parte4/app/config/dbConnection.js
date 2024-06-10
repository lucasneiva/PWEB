const sql = require('mssql'); // Importação correta do módulo
 
var connSQLServer = function () {
    const sqlConfig = {
        user: 'BD2221012', //'LOGON',
 
        password: 'senha@123', //'SENHA',
 
        database: 'LP2', //'site_fatec',
 
        server: 'APOLO', //'NOME_DO_SERVIDOR',
        options: {
            encrypt: false,
            trustServerCertificate: true // se você não tiver um certificado de servidor configurado
        }
    }
    return sql.connect(sqlConfig);
}

module.exports = function() {
    console.log('O autoload carregou o módulo de conexão com o bd');
    
    return connSQLServer;
}
