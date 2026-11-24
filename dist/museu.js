"use strict";

const works = {
  arnolfini: {
    title: "O Retrato dos Arnolfini",
    meta: "Jan van Eyck · 1434 · National Gallery",
    alt: "Um homem e uma mulher de mãos dadas em um quarto. Entre eles, ao fundo, há um pequeno espelho redondo.",
    intro: "Jan van Eyck pintou os Arnolfini num quarto cheio de objetos minuciosos. Para descobrir quem mais poderia estar ali, olhe para o espelho no fundo da sala.",
    source: "https://www.nationalgallery.org.uk/paintings/jan-van-eyck-the-arnolfini-portrait",
    imageSource: "https://commons.wikimedia.org/wiki/File:Van_Eyck_-_Arnolfini_Portrait.jpg",
    clues: [
      {
        label: "O espelho", x: 51, y: 30, type: "Observação e hipótese",
        title: "Duas pessoas na porta",
        description: "O espelho convexo mostra o casal de costas e duas figuras na entrada do quarto, no lugar de onde olhamos. Logo acima, a inscrição diz que Jan van Eyck esteve ali. A proximidade entre o reflexo e a inscrição levanta uma hipótese: uma das figuras pode ser o próprio pintor. A identidade delas permanece em aberto."
      },
      {
        label: "O vestido", x: 75, y: 47, type: "Contexto histórico",
        title: "O gesto que engana",
        description: "A mulher reúne com a mão o tecido do vestido junto ao abdômen. O volume costuma sugerir gravidez a quem olha hoje. A National Gallery associa a silhueta à moda da época e à quantidade de tecido que ela segura."
      },
      {
        label: "O cachorro", x: 49, y: 84, type: "Evidência técnica",
        title: "Um detalhe acrescentado durante o trabalho",
        description: "O cachorro aos pés do casal olha para fora do quadro. Exames de reflectografia infravermelha mostram que o animal estava ausente do primeiro desenho sob a pintura, assim como o lustre e os sapatos deixados no chão."
      }
    ]
  },
  emaus: {
    title: "A Ceia em Emaús",
    meta: "Caravaggio · 1601 · National Gallery",
    alt: "Quatro homens ao redor de uma mesa iluminada, com pão, frutas e uma cesta na borda.",
    intro: "Caravaggio escolheu o instante em que dois discípulos reconhecem Cristo ressuscitado durante uma refeição. Os gestos, a luz e até a posição da cesta fazem a surpresa chegar à borda da tela.",
    source: "https://www.nationalgallery.org.uk/paintings/michelangelo-merisi-da-caravaggio-the-supper-at-emmaus",
    imageSource: "https://commons.wikimedia.org/wiki/File:Supper_at_Emmaus-Caravaggio_(1601).jpg",
    clues: [
      {
        label: "A cesta", x: 64, y: 74, type: "Composição",
        title: "Frutas à beira da queda",
        description: "A cesta avança para fora da beirada da mesa. Ao deixar parte do seu peso aparentemente sem apoio, Caravaggio cria tensão e faz o objeto parecer ocupar o mesmo espaço do observador."
      },
      {
        label: "O cotovelo", x: 22, y: 75, type: "Composição",
        title: "O movimento interrompido",
        description: "À esquerda, o discípulo apoia as mãos na cadeira e parece prestes a levantar. Seu cotovelo se projeta na direção de quem olha. No lado oposto, o outro discípulo abre os braços num gesto de espanto."
      },
      {
        label: "A bênção", x: 50, y: 47, type: "Contexto religioso",
        title: "O instante do reconhecimento",
        description: "Cristo estende a mão sobre a mesa. No Evangelho de Lucas, os discípulos reconhecem o companheiro de viagem quando ele abençoa e parte o pão. A luz destaca os rostos e concentra nossa atenção na reação dos dois homens."
      }
    ]
  },
  perola: {
    title: "Moça com Brinco de Pérola",
    meta: "Johannes Vermeer · c. 1665 · Mauritshuis",
    alt: "Uma jovem com turbante azul e amarelo vira o rosto para quem olha. Um brinco brilha na sombra.",
    intro: "A jovem olha por cima do ombro, como se tivesse acabado de ouvir seu nome. O Mauritshuis classifica a obra como uma tronie, um estudo de uma figura imaginada, com ênfase na expressão e no traje.",
    source: "https://www.mauritshuis.nl/en/our-collection/artworks/670-girl-with-a-pearl-earring/",
    imageSource: "https://commons.wikimedia.org/wiki/File:Girl_with_a_Pearl_Earring.jpg",
    clues: [
      {
        label: "O brinco", x: 61, y: 55, type: "Técnica",
        title: "Uma joia feita de luz",
        description: "Procure o contorno do brinco. Vermeer dá forma à joia com poucos reflexos, incluindo um brilho no alto e uma luz suave embaixo. A escala incomum do objeto deixa em aberto se o pintor imaginou uma pérola, uma imitação ou outro tipo de adorno."
      },
      {
        label: "O olhar", x: 41, y: 38, type: "Observação",
        title: "A impressão de um encontro",
        description: "O corpo está de perfil, enquanto a cabeça se volta para nós. Os pontos claros nos olhos e os lábios entreabertos fazem a pose parecer um movimento interrompido."
      },
      {
        label: "O fundo", x: 17, y: 19, type: "Evidência técnica",
        title: "Uma cortina apagada pelo tempo",
        description: "O fundo hoje parece quase uniforme. Uma investigação do Mauritshuis revelou variações em forma de dobras, compatíveis com uma cortina verde atrás da figura. Mudanças nos materiais tornaram esse fundo muito mais escuro."
      }
    ]
  },
  saturno: {
    title: "Saturno devorando seu filho",
    meta: "Francisco de Goya · 1820–1823 · Museo del Prado",
    alt: "Saturno, de olhos arregalados, segura uma figura humana contra um fundo escuro.",
    intro: "Na mitologia, Saturno devora seus filhos para tentar evitar que um deles o destrone. Goya pintou essa cena diretamente na parede da casa onde morava, a Quinta del Sordo, nos arredores de Madri.",
    source: "https://www.museodelprado.es/en/the-collection/art-work/saturn/18110a75-b0e7-430c-bc73-2a4d55893bd6",
    imageSource: "https://commons.wikimedia.org/wiki/File:Saturn_Devouring_His_Son.jpg",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0/",
    clues: [
      {
        label: "Os olhos", x: 42, y: 17, type: "Composição",
        title: "O medo no rosto do deus",
        description: "Os olhos muito abertos concentram a claridade no rosto de Saturno. O gesto pertence a quem domina a cena, mas seu olhar pode ser lido como pânico. O medo de perder o poder ajuda a explicar o ato no mito."
      },
      {
        label: "As mãos", x: 52, y: 41, type: "Observação",
        title: "Uma força que deixa marcas",
        description: "Os dedos pressionam o corpo com tanta força que se destacam na carne. A vítima tem proporções adultas, uma escolha que torna a imagem diferente das versões do mito em que os filhos são engolidos logo após o nascimento."
      },
      {
        label: "A parede", x: 16, y: 68, type: "História material",
        title: "Antes da tela, havia uma casa",
        description: "A obra faz parte das chamadas Pinturas Negras, que Goya fez nas paredes da Quinta del Sordo. Décadas depois, as pinturas foram transferidas para tela. A ficha do Prado registra esse percurso material."
      }
    ]
  }
};

const dialog = document.querySelector("#investigacao");
const dialogScroll = document.querySelector(".dialog-scroll");
const painting = document.querySelector("#painting");
const imageCredit = document.querySelector("#image-credit");
const workMeta = document.querySelector("#work-meta");
const workTitle = document.querySelector("#work-title");
const workIntro = document.querySelector("#work-intro");
const museumSource = document.querySelector("#museum-source");
const pins = document.querySelector("#pins");
const clueButtons = document.querySelector("#clue-buttons");
const clueType = document.querySelector("#clue-type");
const clueTitle = document.querySelector("#clue-title");
const clueDescription = document.querySelector("#clue-description");

let activeWork;

function selectClue(clueIndex) {
  const clue = activeWork.clues[clueIndex];
  const clueControls = [...pins.children, ...clueButtons.children];

  for (const button of clueControls) {
    button.setAttribute("aria-pressed", String(Number(button.dataset.clue) === clueIndex));
  }

  clueType.textContent = clue.type;
  clueTitle.textContent = clue.title;
  clueDescription.textContent = clue.description;
}

function makeClueButton(clue, index, isPin) {
  const button = document.createElement("button");
  const ordinal = index + 1;
  button.type = "button";
  button.dataset.clue = index;
  button.textContent = isPin ? ordinal : clue.label;
  button.setAttribute("aria-controls", "clue-panel");
  if (isPin) {
    button.className = "clue-pin";
    button.setAttribute("aria-label", `Pista ${ordinal} — ${clue.label}`);
    button.style.setProperty("--x", `${clue.x}%`);
    button.style.setProperty("--y", `${clue.y}%`);
  }

  button.addEventListener("click", () => {
    selectClue(index);
    if (isPin && matchMedia("(max-width: 700px)").matches) {
      document.querySelector("#clue-panel").scrollIntoView({ block: "nearest" });
    }
  });
  return button;
}

function creditLink(label, href) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = label;
  imageCredit.append(link);
}

function syncWork() {
  const slug = location.hash.replace(/^#obra-/, "");
  const work = location.hash.startsWith("#obra-") && Object.hasOwn(works, slug) ? works[slug] : null;
  if (!work) {
    if (dialog.open) dialog.close();
    return;
  }
  if (work === activeWork && dialog.open) return;

  activeWork = work;
  painting.src = `assets/${slug}.webp`;
  painting.alt = work.alt;
  workMeta.textContent = work.meta;
  workTitle.textContent = work.title;
  workIntro.textContent = work.intro;
  museumSource.href = work.source;
  imageCredit.replaceChildren();
  creditLink(work.imageLicense ? "Reprodução do Museo del Prado via Wikimedia Commons" : "Reprodução via Wikimedia Commons", work.imageSource);
  if (work.imageLicense) {
    imageCredit.append(" · ");
    creditLink("CC BY-SA 4.0", work.imageLicense);
    imageCredit.append(" · imagem redimensionada");
  }

  pins.replaceChildren(...work.clues.map((clue, index) => makeClueButton(clue, index, true)));
  clueButtons.replaceChildren(...work.clues.map((clue, index) => makeClueButton(clue, index, false)));
  selectClue(0);

  if (!dialog.open) dialog.showModal();
  dialogScroll.scrollTop = 0;
}

for (const link of document.querySelectorAll('a[href^="#obra-"]')) {
  link.addEventListener("click", event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (location.hash !== link.hash) {
      history.pushState({ museumWork: true, previousHash: location.hash }, "", link.hash);
    }
    syncWork();
  });
}

dialog.addEventListener("close", () => {
  if (dialog.open || !location.hash.startsWith("#obra-")) return;
  const previousHash = history.state?.museumWork ? history.state.previousHash : "";
  history.replaceState(null, "", location.pathname + location.search + previousHash);
});

window.addEventListener("popstate", syncWork);
window.addEventListener("hashchange", syncWork);
syncWork();

const filters = [...document.querySelectorAll("[data-filter]")];
const cards = [...document.querySelectorAll("[data-topics]")];
const filterStatus = document.querySelector("#filter-status");

for (const button of filters) {
  button.addEventListener("click", () => {
    for (const filter of filters) {
      filter.setAttribute("aria-pressed", String(filter === button));
    }

    const filter = button.dataset.filter;
    let visible = 0;
    for (const card of cards) {
      card.hidden = filter !== "todas" && !card.dataset.topics.split(" ").includes(filter);
      if (!card.hidden) visible += 1;
    }
    filterStatus.textContent = visible === 1 ? "1 obra exibida." : `${visible} obras exibidas.`;
  });
}
