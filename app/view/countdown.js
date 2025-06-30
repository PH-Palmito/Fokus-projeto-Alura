import showTimer from "../partial/timer.js";
const btnStartPause = document.getElementById("start-pause");

// Tempo inicial do cronômetro (pode mudar facilmente depois)
let timerSeconds = 25 * 60;
let intervalId = null;

// Sons
const soundStart = new Audio("../sons/play.wav");
const soundPause = new Audio("../sons/pause.mp3");
const soundFinish = new Audio("../sons/beep.mp3");

// Função para atualizar o cronômetro (aqui você pode exibir no DOM se quiser)
const countdown = (context) => {
  if (context === "longo") {
    stopTimer();
    timerSeconds = 5 * 60;
  } else if (context === "curto") {
    stopTimer();
    timerSeconds = 3 * 60;
  } else if (context === "foco") {
    stopTimer();
    timerSeconds = 25 * 60;
  }
  showTimer(timerSeconds);
  if (timerSeconds <= 0) {
    btnStartPause.disabled = true;
    stopTimer();
    soundFinish.play();
    // console.log("⏰ Tempo esgotado!");
    return;
  }
  timerSeconds--;
};

// Inicia ou retoma o temporizador
function startTimer() {
  if (intervalId !== null) return; // já está rodando
  intervalId = setInterval(countdown, 1000);
  btnStartPause.innerHTML = `  <img class="app__card-primary-butto-icon" src="/imagens/pause.png" alt="">
                        <span>Pausar</span>`;
  soundStart.play();
  // console.log("▶️ Iniciado ou retomado");
}

// Pausa o temporizador
function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
  btnStartPause.innerHTML = ` <img class="app__card-primary-butto-icon" src="/imagens/play_arrow.png" alt="">
                        <span>Retorna</span>`;
  soundPause.play();
  // console.log("⏸️ Pausado");
}

// Finaliza o timer ao chegar no fim
function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
  btnStartPause.innerHTML = `
   <img class="app__card-primary-butto-icon" src="/imagens/play_arrow.png" alt="">
                        <span>Iniciar</span>`;
  // console.log("✅ Finalizado");
}

// Alterna entre start e pause no clique
btnStartPause.addEventListener("click", () => {
  if (intervalId === null) {
    startTimer();
  } else {
    pauseTimer();
  }
});

export default countdown;
