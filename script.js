function openNav() {

    document.querySelector("main").classList.add("active");
    if (window.innerWidth > 760) {
        document.getElementById("barra-lateral").style.width = "250px";
    } else {
        document.getElementById("barra-lateral").style.width = (window.innerWidth * 0.3) + "px";
    }
    document.querySelector(".openbtn").style.display = "none"; 
}


function closeNav() {
    document.querySelector("main").classList.remove("active");
    document.getElementById("barra-lateral").style.width = "0";
    document.querySelector(".openbtn").style.display = "block"; 
}


