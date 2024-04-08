let idade;
let sexo;
let opnião;
let maisVelho;
let maisNovo;
let pessimos = 0;
let otmbom = 0;
let homens = 0;
let mulheres = 0;
let totalIdd = 0;
const MAX = 45;

for (let index = 0; index < MAX; index++) {
    idade = parseFloat(prompt("Qual a sua idade: "));

    totalIdd += idade;

    if(index == 0) {
        maisVelho = idade;
        maisNovo = idade;
    }

    if(idade > maisVelho) {
        maisVelho = idade
    }

    if(idade < maisNovo) {
        maisNovo = idade
    }

    sexo = prompt("Qual o seu sexo: ");
    
    opnião = prompt("Qual sua opnião");

    if(opnião == "1") {
        pessimos++;
    }

    if(opnião == "4" || opnião == "3") {
        otmbom++;
    }

    if(sexo == "M"){
        homens++;
    }else{
        mulheres++;
    }

}

let mediaIdd;


mediaIdd = totalIdd/MAX;

alert("A média das idades é: " + mediaIdd);
alert("A pessoa mais velha: " + maisVelho);
alert("A pessoa mais nova: " + maisNovo);
alert("Responderam péssimo: " + pessimos);
alert("Responderam bom ou ótimo (%): " + otmbom/MAX*100);
alert("Homens: " + homens);
alert("Mulheres:" + mulheres);
