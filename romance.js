document.addEventListener("DOMContentLoaded", () => {
  const confetti = document.getElementById("confetti");
  const totalHearts = 28;

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < totalHearts; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-particle";

    const size = randomBetween(10, 18);
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${randomBetween(5, 95)}%`;
    heart.style.top = `${randomBetween(-20, 80)}%`;
    heart.style.opacity = randomBetween(0.4, 0.95);
    heart.style.animation = `float ${randomBetween(8, 16)}s ease-in infinite`;
    heart.style.animationDelay = `${randomBetween(0, 6)}s`;
    heart.style.transform = `rotate(${randomBetween(-35, 35)}deg)`;

    confetti.appendChild(heart);
  }
});

const style = document.createElement("style");
style.textContent = `
@keyframes float {
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-24px) rotate(10deg); }
  100% { transform: translateY(24px) rotate(0deg); }
}
`;
document.head.appendChild(style);

const loveMessages = [
  "Aqui lhe aguarda uma mensagem de amor, um carinho digital que pulsa com a intensidade do meu sentimento por você.",
  "Cada palavra é um sussurro do meu coração, cada frase é um abraço virtual que quero te dar.",
  "Meu amor por você cresce a cada dia e se reflete em cada pequena coisa que faço.",
  "Você é a inspiração que transforma tudo o que eu escrevo em carinho.",
  "Quando penso em você, o mundo se enche de cores e tudo se torna mais doce."
];
let currentMessageIndex = 0;

function next_message() {
  currentMessageIndex = (currentMessageIndex + 1) % loveMessages.length;
  const messageElement = document.getElementById("love-message");
  if (messageElement) {
    messageElement.textContent = loveMessages[currentMessageIndex];
  }
}
