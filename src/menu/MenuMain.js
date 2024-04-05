import { handleOpenMenu } from "./openMenu/handleOpenMenu";

export class MenuMain {
  constructor() {
    this.ready();
  }
  ready() {
    addStartButtonHandler();
  }
}
function addStartButtonHandler() {
  const response = handleOpenMenu();
  console.log("Start button event listener:", response);
}
