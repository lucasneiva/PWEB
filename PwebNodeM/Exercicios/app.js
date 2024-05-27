var app = require('./app/config/server');

try {
    app.listen(3000, function() {
        console.log("servidor ta de pe");
    });    
} catch (error) {
    console.log("deu ruim");
}

app.get("/", (req, res) => {
    res.render("home/index");
});

app.get("/historia", (req, res) => {
    res.render("informacao/historia");
});

app.get("/informacao/professores", (req, res) => {
    res.render("informacao/professores");
});

