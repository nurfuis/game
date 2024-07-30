import { initLaunchSequence } from "./gameMenuMain/launch/initLaunchSequence";
import { initOpenGameMenu as initOpenGameMenu } from "./gameMenuMain/open/initOpenGameMenu";

export class GameMenuMain {
  constructor(mainWindow) {
    this.ready(mainWindow);
  }
  ready(mainWindow) {
    addOpenMenuHandler(mainWindow);
    addLaunchHandler(mainWindow);
  }
}
function addOpenMenuHandler(mainWindow) {
  const response = initOpenGameMenu(mainWindow);
  console.log("[main] Intialize open game menu listener:", response);
}
function addLaunchHandler(mainWindow) {
  const response = initLaunchSequence(mainWindow);
  console.log("[main] Initialize launch sequence listener:", response);
}
