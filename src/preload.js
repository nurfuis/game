const { contextBridge } = require("electron");
const { menuAPI } = require("./menu/menuAPI");

const newMenuAPI = menuAPI;

contextBridge.exposeInMainWorld("menuAPI", newMenuAPI);
