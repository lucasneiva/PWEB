const calcularMediaAluno = (nome) => {
    const notas = entradaNotas();
    const media = calcMedia(notas);
    mostrarMedia(nome, media);
};

const entradaNotas = () => {
    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));
    const nota3 = parseFloat(prompt("Digite a terceira nota:"));
    return { nota1, nota2, nota3 };
};

const calcMedia = ({ nota1, nota2, nota3 }) => (nota1 + nota2 + nota3) / 3;

const mostrarMedia = (nome, media) => alert(`A média de ${nome} é: ${media.toFixed(2)}`);

do {
    let nome = prompt("Digite o nome do aluno:");
} while(!confirm("Este é o teu nome de verdade???"));

calcularMediaAluno(nome);
