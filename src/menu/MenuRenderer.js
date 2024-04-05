import "./menu.css";
import { StartButton } from "./openMenu/startButton";

export class MenuRenderer {
  constructor() {
    this.ready();
  }
  ready() {
    addStartButtonElement();
  }
}

function addStartButtonElement() {
  const bodyElement = document.querySelectorAll(".body");
  const startButtonElement = new StartButton(bodyElement[0]);
  console.log("Start button loaded:", startButtonElement);
}
