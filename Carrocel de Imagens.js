//código cagado mas tá funcionando n meche
const conteudo = [
    {
        logotipo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Jujutsu_Kaisen_logo_in_Japan.png/640px-Jujutsu_Kaisen_logo_in_Japan.png",
        textoEspecial: "Jujutsu Kaisen segue Yuji Itadori, um estudante do ensino médio que se torna um usuário de Jujutsu após engolir um dedo amaldiçoado. O anime combina ação intensa com um enredo envolvente, explorando temas como amizade, sacrifício e a luta contra maldições. Com uma animação de alta qualidade e um elenco carismático, conquistou rapidamente fãs ao redor do mundo.",
        descricao: "Classificação: A16 | 4.9 ⭐⭐⭐⭐⭐ | 447k (crunchyroll)| Vencedor Anime Awards 2024",
        imagemAdicional: "https://portalcmais.com.br/wp-content/uploads/2024/02/Copia-de-Design-sem-nome-1-2.png"
    },
    {
        logotipo: "https://logos-world.net/wp-content/uploads/2021/12/Demon-Slayer-Logo.png",
        textoEspecial: "Kimetsu no Yaiba, também conhecido como Demon Slayer, narra a jornada de Tanjiro Kamado, que se torna um caçador de demônios após sua família ser brutalmente assassinada. A série destaca-se pela sua animação deslumbrante e batalhas coreografadas, além de abordar o amor, a perda e a resiliência em meio à adversidade.",
        descricao: "Classificação: A16 | 4.9 ⭐⭐⭐⭐ 536k (crunchyroll)| Vencedor Anime Awards 2024",
        imagemAdicional: "https://cupulatrovao.com.br/wp-content/uploads/2019/10/Capa-analise-kimetsu-no-yaiba.jpg"
    },
    {
        logotipo: "https://media.themoviedb.org/t/p/w500/auFfwbIGBYTU1eqzrV4aNCbUanI.png",
        textoEspecial: "Solo Leveling é uma webtoon que acompanha Sung Jin-Woo, um caçador fraco que, após um encontro fatídico em um dungeon, ganha a habilidade de se tornar mais forte a cada derrota. A narrativa envolve crescimento pessoal e conquistas, com ilustrações impressionantes e um enredo que mistura elementos de RPG e ação épica.",
        descricao: "Classificação: A16 | 4.7 ⭐⭐⭐⭐ 337k (crunchyroll)",
        imagemAdicional: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85/catalog/crunchyroll/4305090653ee4239dd0d797f1a4a6bdf.jpg"
    }
];

let indiceAtual = 0;

const logotipoElemento = document.querySelector('.logotipo-inicial');
const textoEspecialElemento = document.querySelector('.informacoes-especiais');
const descricaoElemento = document.querySelector('.texto-secao-inicial p');
const imagemAdicionalElemento = document.querySelector('.secao-inicial img:not(.logotipo-inicial)');

// Função para atualizar o conteúdo automaticamente com transição suave
function atualizarConteudo() {
    // Primeira etapa: reduzir a opacidade para 0 (fade out)
    logotipoElemento.style.opacity = 0;
    textoEspecialElemento.style.opacity = 0;
    descricaoElemento.style.opacity = 0;
    imagemAdicionalElemento.style.opacity = 0;

    // Espera 500ms (o tempo da transição) para trocar o conteúdo
    setTimeout(function() {
        // Atualiza o logotipo, texto especial, descrição e imagem adicional
        logotipoElemento.src = conteudo[indiceAtual].logotipo;
        textoEspecialElemento.textContent = conteudo[indiceAtual].textoEspecial;
        descricaoElemento.innerHTML = conteudo[indiceAtual].descricao;
        imagemAdicionalElemento.src = conteudo[indiceAtual].imagemAdicional;

        // Segunda etapa: aumentar a opacidade para 1 (fade in)
        logotipoElemento.style.opacity = 1;
        textoEspecialElemento.style.opacity = 1;
        descricaoElemento.style.opacity = 1;
        imagemAdicionalElemento.style.opacity = 1;

        // Atualiza o índice para o próximo item
        indiceAtual = (indiceAtual + 1) % conteudo.length;
    }, 500); // Corresponde ao tempo da transição de fade out
}

// Inicia o carrossel automático, trocando a cada 5 segundos
setInterval(atualizarConteudo, 5000);

// Atualiza o conteúdo na primeira vez ao carregar a página
atualizarConteudo();