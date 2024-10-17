document.getElementById("mostrarFoguinhoBtn").addEventListener("click", function() {
    const containerFoguinho = document.getElementById("containerFoguinho");
    const foguinho = document.getElementById("foguinho");

    // Exibe o foguinho
    containerFoguinho.classList.remove("escondido");

    // Aguarda um breve tempo para garantir que o foguinho esteja visível
    setTimeout(() => {
        // Move o foguinho para cima e o torna invisível
        foguinho.style.transform = "translateY(-200px)";
        foguinho.style.opacity = "0";
        
        // Esconde o container após a animação
        setTimeout(() => {
            containerFoguinho.classList.add("escondido");
            // Reseta a posição do foguinho
            foguinho.style.transform = "translateY(0)";
            foguinho.style.opacity = "1";
        }, 2000); // Tempo da animação
    }, 100); // Pequeno delay para mostrar o foguinho
});
