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
