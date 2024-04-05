import { ipcMain } from "electron";
import { toggleGameMenuOptions } from "./toggleGameMenuOptions";

export function initOpenGameMenu() {
  ipcMain.on("game-menu:open", async (event) => {
    toggleGameMenuOptions();

    // alert the renderer to display the menu, the api is listening
    event.returnValue = { options: "" };

    console.log("[main] Tell the renderer to open the game menu.");
  });
  //  return true to the module that the listener was loaded
  return true;
}
