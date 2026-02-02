export function initDesktop() {
  const desktop = document.getElementById("desktop");
  // Right click menu placeholder
  desktop.oncontextmenu = e => {
    e.preventDefault();
    alert("Right-click menu coming soon!");
  };
}
