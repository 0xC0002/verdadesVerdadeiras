// Garante que a página comece no topo
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

function showThoughtBalloon() {
    const container = document.querySelector(".photo-container");

    // Verifica se o balão já existe
    if (document.querySelector(".thought-balloon")) return;

    // Cria o balão de pensamento
    const balloon = document.createElement("div");
    balloon.classList.add("thought-balloon");

    // Adiciona o texto dentro do balão
    const text = document.createElement("p");
    text.classList.add("thought-text");
    text.innerText = "gente o bruninho é taaaao lindo";

    // Adiciona o texto ao balão
    balloon.appendChild(text);

    // Adiciona o balão ao container
    container.appendChild(balloon);

    // Remove o balão após 5 segundos
    setTimeout(() => {
        balloon.remove();
    }, 5000);
}

const createHearts = (containerSelector, numHearts) => {
  const heartsContainer = document.querySelector(containerSelector);

  if (!heartsContainer) return; // Verifica se o container existe

  // Limpa corações anteriores (caso existam)
  heartsContainer.innerHTML = '';

  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posição aleatória dentro do container
    const x = Math.random() * heartsContainer.offsetWidth;
    const y = Math.random() * heartsContainer.offsetHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Tamanho aleatório
    const size = Math.random() * 20 + 10; // Entre 10px e 30px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Duração da animação aleatória
    const duration = Math.random() * 5 + 3; // Entre 3s e 8s
    heart.style.animationDuration = `${duration}s`;

    heartsContainer.appendChild(heart);
  }
};
const isMobile = window.innerWidth <= 768; // Detecta dispositivos móveis
const numHearts = isMobile ? 20 : 50; // Menos corações no celular
// Cria corações para ambas as seções
createHearts('#section-bastos .hearts-container', 50);
createHearts('#section-bruno .hearts-container', 50);

// Seleciona ambas as seções
const sectionBastos = document.querySelector('#section-bastos');
const sectionBruno = document.querySelector('#section-bruno');

// Configuração do Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'section-bruno') {
                // Quando a seção do Bruno está visível
                sectionBastos.classList.remove('visible');
                sectionBruno.classList.add('visible');
            } else if (entry.target.id === 'section-bastos') {
                // Quando a seção da Bastos está visível
                sectionBruno.classList.remove('visible');
                sectionBastos.classList.add('visible');
            }
        }
    });
}, {
    threshold: 0.1 // A visibilidade será alterada quando 10% da seção estiver na viewport
});

// Observa ambas as seções
observer.observe(sectionBastos);
observer.observe(sectionBruno);

function revealSpoiler(element) {
  element.classList.add('revealed');
}
