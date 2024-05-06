const textoInput = document.getElementById("texto");
const maiusculasCheckbox = document.getElementById("maiusculas");
const minusculasCheckbox = document.getElementById("minusculas");

function manipularTexto() {
  let texto = textoInput.value;
  if (maiusculasCheckbox.checked) {
    texto = texto.toUpperCase();
  }
  if (minusculasCheckbox.checked) {
    texto = texto.toLowerCase();
  }
  textoInput.value = texto;
}

maiusculasCheckbox.addEventListener("change", manipularTexto);
minusculasCheckbox.addEventListener("change", manipularTexto);