
const botao = document.getElementById("abrirCarta");
const carta = document.getElementById("carta");

const botaoSurpresa = document.getElementById("surpresa");
const mensagemFinal = document.getElementById("mensagemFinal");

botao.addEventListener("click", function() {
    carta.hidden = false;

    botao.textContent = "Uma carta feita para você ❤️";
    botao.disabled = true;

    criarCoracoes();
});

botaoSurpresa.addEventListener("click", function() {
    mensagemFinal.hidden = false;

    botaoSurpresa.textContent = "Guarda isso no coração ❤️";
    botaoSurpresa.disabled = true;

    criarCoracoes();
});

function criarCoracoes() {
    for (let i = 0; i < 18; i++) {
        const coracao = document.createElement("span");

        coracao.classList.add("coracao");
        coracao.textContent = "♥";

        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.animationDelay = Math.random() * 3 + "s";
        coracao.style.fontSize =
            (16 + Math.random() * 20) + "px";

        document.body.appendChild(coracao);

        coracao.addEventListener("animationend", function() {
            coracao.remove();
        });
    }
}
