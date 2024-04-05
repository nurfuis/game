import {
  LAUNCH_BUTTON_CLASS,
  LAUNCH_BUTTON_TEXT,
  LAUNCH_BUTTON_WRAPPER_CLASS,
} from "../GameMenuConstants";

export class LaunchButton {
  constructor(element) {
    this.ready(element);
  }
  ready(element) {
    addTo(element);
  }
}

function addTo(element) {
  const newButton = document.createElement("button");
  newButton.classList.add(LAUNCH_BUTTON_CLASS);
  newButton.innerText = LAUNCH_BUTTON_TEXT;

  const newButtonWrapper = document.createElement("div");
  newButtonWrapper.classList.add(LAUNCH_BUTTON_WRAPPER_CLASS);
  newButtonWrapper.appendChild(newButton);

  element.appendChild(newButtonWrapper);

  newButton.addEventListener("click", () => {
    // instead of openGameMenu, try to run a launch sequence
    const response = window.GameMenuAPI.openGameMenu();
    console.log("Launch button was handled:", response);

    if (!!response) {
      newButtonWrapper.remove();
    }
  });
}
