import { ipcMain } from "electron";

export function handleOpenMenu() {
  ipcMain.on("openMenu:startButton", async (event) => {
    // do something here
    event.returnValue = true;
  });
  return true;
}
