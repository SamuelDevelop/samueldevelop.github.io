
function abrirGuia(link){
    window.open(link, "_blank");
}

function carregarModeloSideCard(id) {
    const template = document.getElementById(id);
    const sideCard = document.querySelector(".side-card");

    sideCard.innerHTML = "";

    const clone = template.content.cloneNode(true);
    sideCard.appendChild(clone);

    const fecharSideCard = 
    `
        
    `;

    sideCard.innerHTML += fecharSideCard;
}