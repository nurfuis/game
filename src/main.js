const { app, BrowserWindow } = require("electron");
const { GameMenuMain } = require("./GameMenu/GameMenuMain");

if (require("electron-squirrel-startup")) {
  app.quit();
}

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = true;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();

  // start of my code
  const newGameMenu = new GameMenuMain(mainWindow);
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
