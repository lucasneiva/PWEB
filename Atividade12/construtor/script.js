function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
}

Retangulo.prototype.calcularArea = function() {
    return this.base * this.altura;
}

document.getElementById("calculateBtn").addEventListener("click", function() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("height").value);

    let retangulo = new Retangulo(base, altura);
    let area = retangulo.calcularArea();

    document.getElementById("result").textContent = area;
});
