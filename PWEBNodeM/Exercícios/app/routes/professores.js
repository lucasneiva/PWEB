const sql = require('mssql'); // Importação correta do módulo

module.exports = function (app) {
    app.get('/informacao/professores', async function (req, res) {
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

        async function getProfessores() {
            try {
                const pool = await sql.connect(sqlConfig);
                const results = await pool.request().query('SELECT * from PROFESSORES');
                res.send(results.recordset);
            } catch (err) {
                console.log(err);
            }
        }

        getProfessores();
    });
};
