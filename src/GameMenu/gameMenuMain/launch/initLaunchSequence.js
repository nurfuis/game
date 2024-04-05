import { ipcMain } from "electron";
import { launchSequence } from "./launchSequence";
export function initLaunchSequence() {
  ipcMain.on("game-menu:launch", async (event) => {
    launchSequence();
    event.returnValue = { options: "" };
    console.log("[main] Tell the renderer to launch.");
  });
  //  return true to the module that the listener was loaded
  return true;
}

