const mainMenuEl = document.querySelector(".main-menu");
const blurBoxEl = document.querySelector(".blur-box");

const menuOptionsHTML = 
`
    <h1>Menu</h1>
    <button class="menu-option" onclick="moveLeftMenu()">
        <i class="fa-solid fa-user"></i> Sobre Mim
    </button>
    <button class="menu-option" onclick="moveCenterMenu()">
        <i class="fa-regular fa-folder-open"></i> Meus Projetos
    </button>
    <button class="menu-option">
        <i class="fa-solid fa-palette"></i> Habilidades
    </button>
    <button class="menu-option">
        <i class="fa-solid fa-file-lines"></i> Currículo
    </button>
    <button class="menu-option">
        <i class="fa-solid fa-phone"></i> Contato
    </button>

    <button class="menu-option" onclick="closeMenu()">
        <i class="fa-solid fa-x"></i>
    </button>
`;

function openMenu(){
    mainMenuEl.innerHTML = menuOptionsHTML;
    blurBoxEl.style.display = "block";

    setTimeout(()=>{
        blurBoxEl.style.opacity = 0.5;
    }, 50);
    setTimeout(()=>{
        blurBoxEl.style.opacity = 1;
    }, 100);
    
    mainMenuEl.style.display = "flex";
    setTimeout(()=>{
        mainMenuEl.style.opacity = 0.5;
    }, 250);
    setTimeout(()=>{
        mainMenuEl.style.opacity = 1;
    }, 300);

    const opcoesMenu = document.querySelectorAll(".menu-option");
    let tempo = 300;

    opcoesMenu.forEach(opcao => {

        setTimeout(()=>{
            opcao.style.opacity = 1;
        }, tempo);
        tempo += 100;

    });
}

function closeMenu(){
    const opcoesMenu = document.querySelectorAll(".menu-option");
    let tempo = 100;

    opcoesMenu.forEach(opcao => {
        setTimeout(()=>{
            opcao.style.opacity = 0;
        }, tempo);
        tempo += 100;
        console.log(tempo);
    });

    let newTempo = (opcoesMenu.length + 1) * 100;

    console.log(newTempo)

    setTimeout(()=>{
        mainMenuEl.style.opacity = 0.5;
    }, newTempo + 50);

    setTimeout(()=>{
        mainMenuEl.style.opacity = 0;
    }, newTempo + 100);

    setTimeout(()=>{
        mainMenuEl.style.display = "none";
        mainMenuEl.innerHTML = "";
        moveCenterMenu();
    }, newTempo + 150);

    setTimeout(()=>{
        blurBoxEl.style.opacity = 0.5;
    }, newTempo + 200);
    setTimeout(()=>{
        blurBoxEl.style.opacity = 0;
        blurBoxEl.style.display = "none";
    }, newTempo + 250);

    
}

function moveLeftMenu(){
    mainMenuEl.classList.add('left');
    openSideCard();
}

function moveCenterMenu(){
    mainMenuEl.classList.remove('left');
    closeSideCard();
}