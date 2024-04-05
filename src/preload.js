const { contextBridge } = require("electron");
const { GameMenuAPI } = require("./GameMenu/GameMenuAPI");

const newGameMenuAPI = GameMenuAPI;

contextBridge.exposeInMainWorld("GameMenuAPI", newGameMenuAPI);
