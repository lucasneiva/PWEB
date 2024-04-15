function maiorDe3(valores) {
    return Math.max(...valores);
}

function ordenarvalores(valores) {
    valores.sort((a, b) => a - b);
    return valores;
}

function verificarPalindromo(texto) {
    const textoMaiusculo = texto.toUpperCase().replace(/\s+/g, "");
    
    const textoReverso = textoMaiusculo.split("").reverse().join("");
    
    return textoMaiusculo === textoReverso;
}

function verificarTriangulo(lados) {
    if (lados.length !== 3) {
        return "Erro: O array precisa ter exatamente 3 elementos.";
    }

    const [a, b, c] = lados;

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Triângulo equilátero";
        } else if (a === b || a === c || b === c) {
            return "Triângulo isósceles";
        } else {
            return "Triângulo escaleno";
        }
    } else {
        return "Não forma um triângulo";
    }
}

let valores = [];

for (let i = 0; i < 3; i++) {
    valores[i] = parseFloat(prompt("Digite um valor: "));
}

alert("Maior é: " + maiorDe3(valores));

for (let i = 0; i < 3; i++) {
    valores[i] = parseFloat(prompt("Digite um valor: "));
}

const valoresOrdenadas = ordenarvalores(valores);
alert("valores em ordem crescente: " + valoresOrdenadas);


const frase = prompt("Digite uma frase: ");
const resultado = verificarPalindromo(frase) ? "É um palíndromo" : "Não é um palíndromo";
alert(resultado);


const lados = [parseFloat(prompt("Digite o valor do lado A: ")),
    parseFloat(prompt("Digite o valor do lado B: ")), 
    parseFloat(prompt("Digite o valor do lado C: "))];

const tipoTriangulo = verificarTriangulo(lados);
alert(tipoTriangulo);
