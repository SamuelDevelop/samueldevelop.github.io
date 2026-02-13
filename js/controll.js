
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
        <button onclick="closeSideCard()">
            <i class="fa-solid fa-angles-right"></i>
        </button>
    `;

    sideCard.innerHTML += fecharSideCard;
}