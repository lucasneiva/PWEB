
var jogarDnv;
var escP;
var escC;
var pVenc = 0;

const escolhas = ["3", "1", "2"];

const getName = ( x ) => {
    switch(x){
        case "1":
            return "Pedra";
            break;
        case "2":
            return "Papel";
            break;
        case "3":
            return "Tesoura";
            break;
        default:
            return "Vento";
            break;
        
    }
}

do {
    do {
        escP = prompt("Escolha:\n[1] - Pedra\n[2] - Papel\n[3] - Tesoura").toString().trim();
        if( escP == "1" && escP == "2" && escP == "3" ) {
            alert("Escolha inválida: " + escP);
        }
        else {
            alert("Você escolheu: " + getName(escP));
        }
    } while ( escP == "1" && escP == "2" && escP == "3" )

    escC = (Math.floor(Math.random() * 3) + 1).toString();

    alert("O computa escolheu: " + getName(escC));

    switch (escP) {
        case "1":
            switch (escC) {
                case "1":
                    alert("Empate");
                    pVenc = 2;
                    break;
                case "2":
                    alert("Papel vence pedra!");
                    pVenc = 0;
                    break;
                case "3":
                    alert("Pedra vence tesoura!")
                    pVenc = 1;
                    break;
            }
            break;
        case "2":
            switch (escC) {
                case "1":
                    alert("Papel vence pedra!");
                    pVenc = 1;
                    break;
                case "2":
                    alert("Empate");
                    pVenc = 2;
                    break;
                case "3":
                    alert("Tesoura vence papel!");
                    pVenc = 0;
                    break;
            }
            break;
        case "3":
            switch (escC) {
                case "1":
                    alert("Pedra vence tesoura!");
                    pVenc = 0;
                    break;
                case "2":
                    alert("Tesoura vence papel!");
                    pVenc = 1;
                    break;
                case "3":
                    alert("Empate");
                    pVenc = 2;
                    break;
            }
            break;
    }
    if(pVenc == 1) {
        alert("Você venceu!");
    }else if (pVenc == 0){
        alert("Você perdeu!");
    }
    else {
        alert("Deu empate");
    }
    jogarDnv = confirm("Jogar de novo?");
} while (jogarDnv)

alert("Fim de jogo!");
