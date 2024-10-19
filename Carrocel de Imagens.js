const conteudoCarrossel = [
    {
        logo: "Imagens/emAltaImgs/Logo JKK.png",
        texto: "Jujutsu Kaisen segue Itadori, um estudante que se torna um usuário de Jujutsu após engolir um dedo amaldiçoado. O anime possui ação intensa e explora temas como amizade, sacrifício e a luta contra maldições.",
        imagem: "Imagens/emAltaImgs/jjk img.jpg"
    },
    {
        logo: "Imagens/emAltaImgs/Logo Kimetsu.png",
        texto: "Kimetsu no Yaiba acompanha Tanjiro, um jovem que se torna um caçador de onis após sua família ser massacrada por um deles. Determinado a salvar sua irmã, transformada em oni, ele enfrenta inimigos poderosos enquanto busca uma cura.",
        imagem: "Imagens/emAltaImgs/img KNY.jpg"
    },
    {
        logo: "Imagens/emAltaImgs/Logo solo.png",
        texto: "Solo Leveling segue Jin-Woo, um caçador de baixo nível num mundo repleto de monstros. Após morrer ele recebe uma oportunidade única: um sistema que lhe permite se tornar mais forte a cada missão. Agora, ele busca se tornar o caçador mais poderoso desse mundo.",
        imagem: "Imagens/emAltaImgs/img solo.jpg"
    }
];

let indexAtual = 0;

function atualizarCarrossel() {
    const logoAnime = document.getElementById('logo-anime');
    const textoAnime = document.getElementById('texto-anime');
    const imagemDetalhes = document.getElementById('imagem-detalhes');

    // Fade out the current elements
    logoAnime.style.transition = 'opacity 0.5s ease-out'; // Transição de 500ms
    textoAnime.style.transition = 'opacity 0.5s ease-out'; // Transição de 500ms
    imagemDetalhes.style.transition = 'opacity 0.5s ease-out'; // Transição de 500ms

    logoAnime.style.opacity = 0;
    textoAnime.style.opacity = 0;
    imagemDetalhes.style.opacity = 0;

    setTimeout(() => {
        // Atualiza as informações do carrossel
        logoAnime.src = conteudoCarrossel[indexAtual].logo;
        textoAnime.textContent = conteudoCarrossel[indexAtual].texto;
        imagemDetalhes.src = conteudoCarrossel[indexAtual].imagem;

        // Fade in the new elements
        logoAnime.style.opacity = 1;
        textoAnime.style.opacity = 1;
        imagemDetalhes.style.opacity = 1;
    }, 500); // Espera 500ms para atualizar o conteúdo

    // Atualiza o índice para o próximo anime
    indexAtual = (indexAtual + 1) % conteudoCarrossel.length;
}

// Atualiza o carrossel a cada 4 segundos
setInterval(atualizarCarrossel, 4000);

// Chama a função uma vez para iniciar
atualizarCarrossel();
