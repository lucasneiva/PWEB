const janela = document.getElementById("janela");
const estado = document.getElementById("estado");

janela.addEventListener("mouseover", () => {
    janela.src = "aberta.jpg";
    estado.textContent = "Janela Aberta";
});

janela.addEventListener("mouseout", () => {
    janela.src = "fechada.jpg";
    estado.textContent = "Janela Fechada";
});

janela.addEventListener("click", () => {
    janela.src = "quebrada.jpg";
    estado.textContent = "Janela Quebrada";
});