const musicInput = document.querySelector("#alternar-musica");

const music = new Audio("/sons/luna-rise-part-one.mp3");
// chamando o arquivo de musica com new Audio

music.loop = true;
// A musica tem um tempo e quando chega no final ela para, colocando o loop true ela começa do começo novamente infinitamente

function changeSon() {
  musicInput.addEventListener("change", () => {
    if (musicInput.checked) {
      music.play();
    } else {
      music.pause();
      music.currentTime = 0;
      music.load();
    }
  });
}

export default changeSon;
