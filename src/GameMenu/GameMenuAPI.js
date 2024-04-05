const { ipcRenderer } = require("electron");

export const GameMenuAPI = {
  openGameMenu() {
    const response = ipcRenderer.sendSync("game-menu:open");
    return response;
  },
};
