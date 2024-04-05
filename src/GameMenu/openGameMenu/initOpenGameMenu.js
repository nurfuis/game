import { ipcMain } from "electron";
import { openGameMenu } from "./openGameMenu";

export function initOpenGameMenu() {
  ipcMain.on("openGameMenu:startButton", async (event) => {
    openGameMenu();

    event.returnValue = true;

    console.log("[main] Tell the renderer to open the game menu.");
  });
  return true;
}
