const { ipcRenderer } = require("electron");

export const menuAPI = {
  openMenu() {
    const response = ipcRenderer.sendSync("menu:open");
    return response;
  },
};
