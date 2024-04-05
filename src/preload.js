const { contextBridge } = require("electron");
const { menuAPI } = require("./menu/menuAPI");

const mainMenu = menuAPI;

contextBridge.exposeInMainWorld("menuAPI", mainMenu);
