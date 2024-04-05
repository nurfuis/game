import {
  START_BUTTON_CLASS,
  START_BUTTON_TEXT,
  START_BUTTON_WRAPPER_CLASS,
} from "./menuConstants";

export class StartButton {
  constructor(element) {
    this.ready(element);
  }
  ready(element) {
    const newButton = document.createElement("button");
    newButton.classList.add(START_BUTTON_CLASS);
    newButton.innerText = START_BUTTON_TEXT;

    const newButtonWrapper = document.createElement("div");
    newButtonWrapper.classList.add(START_BUTTON_WRAPPER_CLASS);
    newButtonWrapper.appendChild(newButton);

    element.appendChild(newButtonWrapper);

    newButton.addEventListener("click", () => {
      const response = window.menuAPI.openMenu();

      console.log(response);

      if (response) {
        remove();
      }
    });
  }
}
function remove() {
  const elementToRemove = document.querySelectorAll(
    `.${START_BUTTON_WRAPPER_CLASS}`
  );
  elementToRemove[0].remove();
}
