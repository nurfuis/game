const { ipcRenderer } = require("electron");

export const GameMenuAPI = {
  openGameMenu() {
    const response = ipcRenderer.sendSync("openGameMenu:launch-button");
    return response;
  },
};
