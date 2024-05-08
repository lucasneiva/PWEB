function validarFormulario() {
    var nomeCompleto = document.getElementById( 'nomeCompleto' ).value;
    var enderecoEmail = document.getElementById( 'enderecoEmail' ).value;
    var caixaComentario = document.getElementById( 'caixaComentario' ).value;
    var visitaAnterior = document.querySelector( 'input[name="visitaAnterior"]:checked' ).value;

    if ( nomeCompleto.length < 10 ) {
        alert( 'O nome completo deve ter pelo menos 10 caracteres.' );
        return false;
    }

    if ( !/@|\./.test( enderecoEmail ) ) {
        alert( 'O endereço de email deve conter "@" e ".".' );
        return false;
    }

    if ( caixaComentario.length < 20 ) {
        alert( 'O comentário deve ter pelo menos 20 caracteres.' );
        return false;
    }

    if ( visitaAnterior === 'SIM' ) {
        alert( 'Esperamos vê-lo novamente em breve!' );
    } else {
        alert( 'Seja bem-vindo de volta!' );
    }

    return true;
}