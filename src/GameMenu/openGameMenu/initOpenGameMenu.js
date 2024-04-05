import { ipcMain } from "electron";
import { enableGameMenuOptions } from "./enableGameMenuOptions";

export function initOpenGameMenu() {
  ipcMain.on("game-menu:open", async (event) => {

    enableGameMenuOptions();

    // alert the renderer to display the menu, the api is listening
    event.returnValue = true;

    console.log("[main] Tell the renderer to open the game menu.");
  });
  //  return true to the module that the listener was loaded
  return true;
}
