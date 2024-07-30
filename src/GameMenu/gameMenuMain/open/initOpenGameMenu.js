import { ipcMain } from "electron";
import { toggleGameMenuOptions } from "./toggleGameMenuOptions";

export function initOpenGameMenu(mainWindow) {
  ipcMain.on("game-menu:open", async (event) => {
    toggleGameMenuOptions(mainWindow);

    event.returnValue = { options: "" };

    console.log("[main] Tell the renderer to open the game menu.");
  });
  return true;
}
