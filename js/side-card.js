const sideCardEl = document.querySelector(".side-card");
let sideCardisOpen = false;

function openSideCard(id){
    carregarModeloSideCard(id);

    if(!sideCardisOpen){
        moveLeftMenu();
        sideCardEl.style.display = "flex";
        sideCardEl.style.opacity = 1;
        sideCardisOpen = true;
    }
    
}

function closeSideCard(){
    if(sideCardisOpen){
        moveCenterMenu();
        sideCardEl.style.opacity = 0;
        sideCardEl.style.display = "none";
        sideCardisOpen = false;
    }
}