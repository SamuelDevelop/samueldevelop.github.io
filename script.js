function openNav() {
    document.querySelector("main").classList.add("active");
    document.getElementById("barra-lateral").style.width = "250px";
    document.querySelector(".openbtn").style.display = "none"; // Esconde o botão ao abrir
}

function closeNav() {
    document.querySelector("main").classList.remove("active");
    document.getElementById("barra-lateral").style.width = "0";
    document.querySelector(".openbtn").style.display = "block"; // Mostra o botão ao fechar
}


