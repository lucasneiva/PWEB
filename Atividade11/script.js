class Aluno {
    constructor(RA, Nome) {
        this.RA = RA;
        this.Nome = Nome;
    }
}

function Aluno2(RA, Nome) {
    this.RA = RA;
    this.Nome = Nome;
}

const Aluno3 = {
    RA: 123456,
    Nome: "João"
};

const Aluno1 = new Aluno(123456, "João");
const Aluno2 = new Aluno2(123456, "João");

console.log(Aluno1);
console.log(Aluno2);
console.log(Aluno3);


