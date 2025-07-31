// Pequena animação de coração pulsando no título
window.onload = () => {
  const header = document.querySelector("header h1");
  setInterval(() => {
    header.classList.toggle("pulse");
  }, 1000);
};
