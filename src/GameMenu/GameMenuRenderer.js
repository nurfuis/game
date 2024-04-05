import "./GameMenu.css";
import { LaunchButton } from "./openGameMenu/LaunchButton";

export class GameMenuRenderer {
  constructor() {
    this.ready();
  }
  ready() {
    addLaunchButton();
    // play intro
  }
}

function addLaunchButton() {
  const bodyElement = document.querySelectorAll(".body");
  const launchBlock = new LaunchButton(bodyElement[0]);
  console.log("Succesfully created: ", launchBlock);
}
