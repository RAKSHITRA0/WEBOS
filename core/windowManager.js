let zIndex = 1;

export function createWindow(title, contentHTML) {
  const win = document.createElement("div");
  win.className = "window";
  win.style.top = "100px";
  win.style.left = "100px";
  win.style.zIndex = zIndex++;

  win.innerHTML = `
    <div class="titlebar">${title}</div>
    <div class="content">${contentHTML}</div>
  `;

  const bar = win.querySelector(".titlebar");

  let offsetX, offsetY;

  bar.onmousedown = e => {
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
    win.style.zIndex = zIndex++;

    document.onmousemove = e => {
      win.style.left = e.clientX - offsetX + "px";
      win.style.top = e.clientY - offsetY + "px";
    };

    document.onmouseup = () => {
      document.onmousemove = null;
    };
  };

  document.getElementById("desktop").appendChild(win);
}
