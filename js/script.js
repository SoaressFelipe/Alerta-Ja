// Menu hambúrguer
document.getElementById("menu-btn").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("open");
});

// Troca de temas
document.getElementById("tema-claro").addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
});

document.getElementById("tema-escuro").addEventListener("click", function () {
  document.body.style.backgroundColor = "#111";
  document.body.style.color = "white";
});

document.getElementById("tema-azul").addEventListener("click", function () {
  document.body.style.backgroundColor = "#cceeff";
  document.body.style.color = "#003344";
});

// Verificação de CEP e alerta
document.getElementById("cepForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const cep = document.getElementById("cepInput").value;
  const mensagem = document.getElementById("mensagem");

  if (cep.length !== 8 || isNaN(cep)) {
    alert("Digite um CEP válido com 8 números.");
    return;
  }

  const nivel = Math.random() * 3;

  if (nivel >= 2) {
    mensagem.textContent = `⚠️ ALERTA! Nível da água: ${nivel.toFixed(2)}m`;
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = `✅ Seguro. Nível da água: ${nivel.toFixed(2)}m`;
    mensagem.style.color = "green";
  }
});

// Slideshow

let slideIndex = 0;
let slides = document.querySelectorAll(".slide");

function mostrarSlides() {
  slides.forEach(function (slide) {
    slide.style.display = "none";
  });
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(mostrarSlides, 3000);
}

mostrarSlides();
