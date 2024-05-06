function validar(event) {
    // 1. Limpar mensagens de erro existentes
    var erros = document.querySelectorAll(".erro");
    for (var i = 0; i < erros.length; i++) {
        erros[i].innerHTML = "";
    }

    // 2. Validação do nome
    var nome = document.getElementById("nome").value;
    if (nome.length < 10) {
        document.getElementById("erroNome").innerHTML = "O nome deve ter pelo menos 10 caracteres.";
    }

    // 3. Validação do email
    var email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("erroEmail").innerHTML = "Por favor, digite um endereço de e-mail válido.";
    }

    // 4. Validação do comentário
    var comentario = document.getElementById("comentario").value;
    if (comentario.length < 20) {
        document.getElementById("erroComentario").innerHTML = "O comentário deve ter pelo menos 20 caracteres.";
    }

    // 5. Validação da pesquisa
    var pesquisa = document.querySelector('input[name="pesquisa"]:checked');
    var mensagemPesquisa = document.getElementById("mensagemPesquisa");
    if (pesquisa === null) {
        mensagemPesquisa.innerHTML = "Que bom que você voltou a visitar esta página!";
    } else {
        mensagemPesquisa.innerHTML = "Volte sempre à está página!";
    }

    // 6. Impedir envio se houver erros
    var existemErros = document.querySelectorAll(".erro:not(:empty)").length > 0;
    if (existemErros) {
        event.preventDefault();
    }
}

// Obter referência ao botão de envio e ao formulário
var botaoEnviar = document.getElementById("botaoEnviar");
var formulario = document.querySelector("form");

// Adicionar listener de evento de clique ao botão de envio
botaoEnviar.addEventListener("click", function (event) {
    validar(event); // Validar o formulário

    // Enviar o formulário somente se não houver erros
    var existemErros = document.querySelectorAll(".erro:not(:empty)").length > 0;
    if (!existemErros) {
        console.log("teste");
        exibirMensagemPesquisa();
    }
});

function exibirMensagemPesquisa() {
    var pesquisa = document.querySelector('input[name="pesquisa"]:checked');
    var mensagemPesquisa = document.getElementById("mensagemPesquisa");
    if (pesquisa === null) {
        mensagemPesquisa.innerHTML = "Que bom que você voltou a visitar esta página!";
    } else {
        mensagemPesquisa.innerHTML = "Volte sempre à está página!";
    }
}