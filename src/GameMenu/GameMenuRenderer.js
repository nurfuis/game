import "./gameMenu.css";
import { LaunchButton } from "./gameMenuRenderer/LaunchButton";

export class GameMenuRenderer {
  constructor() {
    this.ready();
  }
  ready() {
    addLaunchButton();
  }
}

function addLaunchButton() {
  const bodyElement = document.querySelectorAll(".body");
  const launchBlock = new LaunchButton(bodyElement[0]);
  console.log("Successfully created: ", launchBlock);
}
