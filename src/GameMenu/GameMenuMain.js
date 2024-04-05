import { initOpenGameMenu as initOpenGameMenu } from "./openGameMenu/initOpenGameMenu";

export class GameMenuMain {
  constructor() {
    this.ready();
  }
  ready() {
    addOpenMenuHandler();
  }
}
function addOpenMenuHandler() {
  const response = initOpenGameMenu();
  console.log("[main] Intialize open game menu listener:", response);
}
