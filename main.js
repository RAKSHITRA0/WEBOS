import { createWindow } from "./core/windowManager.js";

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

createWindow("Welcome", `
  <h3>NOVA OS</h3>
  <p>System initialized.</p>
`);
