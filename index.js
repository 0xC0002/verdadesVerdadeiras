window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

function showThoughtBalloon() {
    const container = document.querySelector(".photo-container");

    if (document.querySelector(".thought-balloon")) return;

    const balloon = document.createElement("div");
    balloon.classList.add("thought-balloon");

    const text = document.createElement("p");
    text.classList.add("thought-text");
    text.innerText = "gente o bruninho é taaaao lindo";
    balloon.appendChild(text);
    container.appendChild(balloon);


    setTimeout(() => {
        balloon.remove();
    }, 5000);
}

const createHearts = (containerSelector, numHearts) => {
  const heartsContainer = document.querySelector(containerSelector);

  if (!heartsContainer) return;

  heartsContainer.innerHTML = '';

  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const x = Math.random() * heartsContainer.offsetWidth;
    const y = Math.random() * heartsContainer.offsetHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    const size = Math.random() * 20 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    const duration = Math.random() * 5 + 3;
    heart.style.animationDuration = `${duration}s`;

    heartsContainer.appendChild(heart);
  }
};
const isMobile = window.innerWidth <= 768;
const numHearts = isMobile ? 20 : 50;

createHearts('#section-bastos .hearts-container', 50);
createHearts('#section-bruno .hearts-container', 50);


const sectionBastos = document.querySelector('#section-bastos');
const sectionBruno = document.querySelector('#section-bruno');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'section-bruno') {

                sectionBastos.classList.remove('visible');
                sectionBruno.classList.add('visible');
            } else if (entry.target.id === 'section-bastos') {
                sectionBruno.classList.remove('visible');
                sectionBastos.classList.add('visible');
            }
        }
    });
}, {
    threshold: 0.1
});

observer.observe(sectionBastos);
observer.observe(sectionBruno);

function revealSpoiler(element) {
  element.classList.add('revealed');
}
