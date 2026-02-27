async function getprojetos() {
    const projetos = await fetch("../data/projetos.json");
    const dados = await projetos.json();

    return dados;
}


async function loadProjetos() {
    const myProjectsEl = document.querySelector(".my-projects");
    const projetos = await getprojetos();
    let string = ""

    projetos.projetos.forEach(projeto => {
        string += 
        `
            <h2>${projeto.nome}</h2>
        `;
    });

    myProjectsEl.innerHTML = string;
}

