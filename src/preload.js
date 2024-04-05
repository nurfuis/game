const { contextBridge } = require("electron");
const { gameMenuAPI } = require("./gameMenu/gameMenuAPI");

const newGameMenuAPI = gameMenuAPI;

contextBridge.exposeInMainWorld("GameMenuAPI", newGameMenuAPI);
