export function initTaskbar() {
  const clockEl = document.getElementById("clock");

  function updateClock() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Start Menu toggle
  const startBtn = document.getElementById("start");
  const startMenu = document.getElementById("startMenu");
  startBtn.onclick = () => startMenu.classList.toggle("hidden");
}
