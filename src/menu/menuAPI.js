const { ipcRenderer } = require("electron");

export const menuAPI = {
  openMenu() {
    const response = ipcRenderer.sendSync("openMenu:startButton");
    return response;
  },
};
