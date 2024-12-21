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

const createHearts = (numHearts) => {
    const heartsContainer = document.querySelector('.hearts-container');

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Posição aleatória na tela
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

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

// Cria 100 corações ao carregar a página
createHearts(20);

const createStars = () => {
    const body = document.body;

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
        body.appendChild(star);
    }
};

createStars(1500);