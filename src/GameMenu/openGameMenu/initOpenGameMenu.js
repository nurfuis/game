import { ipcMain } from "electron";
import { openGameMenu } from "./openGameMenu";

export function initOpenGameMenu() {
  ipcMain.on("openGameMenu:launch-button", async (event) => {
    // event recieved from the renderer

    // enable the menu api
    openGameMenu();

    // alert the renderer to display the menu, the api is listening
    event.returnValue = true;

    console.log("[main] Tell the renderer to open the game menu.");
  });
  //  return true to the module that the listener was loaded
  return true;
}
