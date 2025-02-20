document.addEventListener("DOMContentLoaded", function () {
    const jogadores = document.querySelectorAll(".foto-jogador");

    jogadores.forEach(jogador => {
        jogador.addEventListener("mouseover", function () {
            const parent = this.closest(".elenco-foto");
            parent.querySelectorAll(".nome, .numero").forEach(elemento => {
                elemento.style.display = "none";
            });
        });

        jogador.addEventListener("mouseout", function () {
            const parent = this.closest(".elenco-foto");
            parent.querySelectorAll(".nome, .numero").forEach(elemento => {
                elemento.style.display = "block";
            });
        });
    });
});