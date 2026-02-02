import { initDesktop } from "./core/desktop.js";
import { initTaskbar } from "./core/taskbar.js";
import { initApps, apps } from "./core/appManager.js";

initDesktop();
initTaskbar();
initApps();

// Open default window
apps.About();
