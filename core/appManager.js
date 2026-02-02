import { createWindow } from "./windowManager.js";

export const apps = {
  "About": () => createWindow("About", "<p>Welcome to NOVA Web OS!</p>"),
  "Notes": () => createWindow("Notes", "<textarea style='width:100%;height:100%;'></textarea>"),
  "Calculator": () => createWindow("Calculator", "<p>Calculator coming soon!</p>"),
  "Terminal": () => createWindow("Terminal", "<p>Terminal coming soon!</p>")
};

export function initApps() {
  const appList = document.getElementById("appList");
  Object.keys(apps).forEach(name => {
    const item = document.createElement("div");
    item.className = "menu-item";
    item.textContent = name;
    item.onclick = () => {
      apps[name]();
      document.getElementById("startMenu").classList.add("hidden");
    };
    appList.appendChild(item);
  });
}
