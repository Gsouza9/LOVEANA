// Espera o DOM carregar
window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".coracoes-container");

  if (!container) return;

  // Função para criar corações
  function criarCoracao() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    // Posição aleatória na horizontal
    heart.style.left = `${Math.random() * 100}vw`;

    // Tamanho aleatório entre 16px e 32px
    const size = 16 + Math.random() * 16;
    heart.style.fontSize = `${size}px`;

    // Velocidade aleatória entre 4s e 7s
    const duration = 4 + Math.random() * 3;
    heart.style.animationDuration = `${duration}s`;

    // Adiciona ao container
    container.appendChild(heart);

    // Remove o coração após o tempo da animação
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  // Cria corações continuamente a cada 350ms
  setInterval(criarCoracao, 350);
});
