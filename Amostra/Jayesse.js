    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".section");

    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = link.getAttribute("data-section");

        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        sections.forEach(sec => {
          if (sec.id === target) {
            sec.style.display = "flex";
            setTimeout(() => sec.classList.add("active"), 10);
          } else {
            sec.classList.remove("active");
            setTimeout(() => sec.style.display = "none", 600);
          }
        });
      });
    });


    const MARCACOES = document.querySelectorAll("mark");

    MARCACOES.forEach(marcacao => {
      let alterna = false;

      setInterval(() => {
        if (alterna) {
          marcacao.style.backgroundColor = "#1066df";
        } else {
          marcacao.style.backgroundColor = "#09387a";
        }
        alterna = !alterna; 
      }, 2000);
    });

    const IMAGEM_CENTRAL = document.getElementById("imagem_Central");
    let indice = 1;
    let vetorImagens = [
      "imagens/camups1.webp",
      "imagens/campus_2.jpg",
      "imagens/cefet_1.webp",
      "imagens/c2_area.jpeg",
    ]

    setInterval(()=>{

      IMAGEM_CENTRAL.style.opacity = 0;

      setTimeout(()=>{
        IMAGEM_CENTRAL.src = vetorImagens[indice];

        indice = (indice + 1) % vetorImagens.length;

        IMAGEM_CENTRAL.style.opacity = 1;
      }, 500);

        
    }, 3000)
