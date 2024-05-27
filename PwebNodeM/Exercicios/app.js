var express = require('express');

var app=express();

app.set('view engine', 'ejs');

try {
    app.listen(3000, function() {
        console.log("servidor ta de pe familia");
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

app.get("/professores", (req, res) => {
    res.render("informacao/professores");
});

