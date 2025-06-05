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
    mensagem.textContent = `✅ Área segura. Nível da água: ${nivel.toFixed(2)}m`;
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

// Quiz
const perguntas = [
  {
    pergunta: "O que fazer em caso de enchente?",
    opcoes: ["Nadar", "Buscar abrigo", "Subir no muro"],
    correta: 1
  },
  {
    pergunta: "Enchente é mais comum em qual estação?",
    opcoes: ["Inverno", "Verão", "Primavera"],
    correta: 1
  },
  {
    pergunta: "O que causa enchentes?",
    opcoes: ["Lixo nas ruas", "Música alta", "Sol forte"],
    correta: 0
  },
  {
    pergunta: "É seguro andar em água de enchente?",
    opcoes: ["Sim", "Não", "Só se for raso"],
    correta: 1
  },
  {
    pergunta: "Quem devemos avisar em caso de emergência?",
    opcoes: ["Amigo", "Defesa Civil", "Ninguém"],
    correta: 1
  },
  {
    pergunta: "Devemos jogar lixo no chão?",
    opcoes: ["Sim", "Não", "Depende"],
    correta: 1
  },
  {
    pergunta: "Qual item é bom ter no kit de emergência?",
    opcoes: ["Celular", "Lanterna", "Caderno"],
    correta: 1
  },
  {
    pergunta: "A enchente pode causar doenças?",
    opcoes: ["Não", "Sim", "Só se chover muito"],
    correta: 1
  },
  {
    pergunta: "Onde devemos nos abrigar em caso de enchente?",
    opcoes: ["No porão", "Lugar alto", "Na rua"],
    correta: 1
  },
  {
    pergunta: "O que é melhor fazer antes de sair de casa na chuva?",
    opcoes: ["Verificar previsão", "Levar guarda-chuva", "Nada"],
    correta: 0
  }
];

function carregarQuiz() {
  const areaPerguntas = document.getElementById("perguntas");

  perguntas.forEach(function (questao, indice) {
    const bloco = document.createElement("div");
    const texto = document.createElement("p");
    texto.textContent = questao.pergunta;
    bloco.appendChild(texto);

    questao.opcoes.forEach(function (opcao, i) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "p" + indice;
      input.value = i;
      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + opcao));
      bloco.appendChild(label);
      bloco.appendChild(document.createElement("br"));
    });

    areaPerguntas.appendChild(bloco);
  });
}

document.getElementById("verResultado").addEventListener("click", function () {
  let acertos = 0;

  perguntas.forEach(function (questao, i) {
    const selecionado = document.querySelector(`input[name="p${i}"]:checked`);
    if (selecionado && parseInt(selecionado.value) === questao.correta) {
      acertos++;
    }
  });

  const resultado = document.getElementById("resultadoQuiz");
  resultado.textContent = "Você acertou " + acertos + " de " + perguntas.length;
});
carregarQuiz();