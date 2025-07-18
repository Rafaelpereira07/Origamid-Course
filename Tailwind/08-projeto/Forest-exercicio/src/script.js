const dia = document.querySelector("#dia");
const temperatura = document.querySelector("#temperatura");
const tempo = document.querySelector("#tempo");
const video = document.querySelector("#video");

const r = Math.floor(Math.random() * 10) + 20;
temperatura.innerText = `${r}º`;
tempo.innerText = r >= 25 ? "🌤️" : `🌧️ ${r + 5}%`;

if (r < 25) video.src = "./img/video_chuva.mp4";

const data = new Date()
  .toLocaleDateString("pt-BR", {
    weekday: "long",
  })
  .replace("-feira", "");
dia.innerText = data;

const mobileBtn = document.querySelector("#mobileBtn");
const mobileMenu = document.querySelector("#mobileMenu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});
