import { ipcMain } from "electron";
import { launchSequence } from "./launchSequence";
export function initLaunchSequence(mainWindow) {
  ipcMain.on("game-menu:launch", async (event) => {
    launchSequence(mainWindow);
    event.returnValue = { options: "" };
    console.log("[main] Tell the renderer to launch.");
  });
  return true;
}
