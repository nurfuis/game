const { ipcRenderer } = require("electron");

export const gameMenuAPI = {
  openGameMenu() {
    const response = ipcRenderer.sendSync("game-menu:open");
    return response;
  },
};
