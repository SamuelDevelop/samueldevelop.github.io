const sideCardEl = document.querySelector(".side-card");

function openSideCard(){
    sideCardEl.style.display = "flex";
    sideCardEl.style.opacity = 1;
}

function closeSideCard(){
    sideCardEl.style.opacity = 0;
    sideCardEl.style.display = "none";
}