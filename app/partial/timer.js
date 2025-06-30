const displayTimer = document.getElementById("timer");

function showTimer(timer) {
  const minutes = new Date(timer * 1000).toLocaleString("pt-BR", {
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  displayTimer.innerHTML = minutes;
}
export default showTimer;
