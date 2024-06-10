module.exports = function(app)
{
    app.get('/admin/adicionar-usuario', function(req, res)
    {
        res.render("admin/adicionar-usuario");
    });
}