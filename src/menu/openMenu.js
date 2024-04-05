import { ipcMain } from "electron";

export function openMenu() {
  ipcMain.on("menu:open", async (event) => {
    event.returnValue = true;
  });
  return true;
}
