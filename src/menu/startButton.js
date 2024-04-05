import { START_BUTTON_TEXT } from "./menuCOnstants";

export class StartButton {
  constructor(element) {
    this.ready(element);
  }
  ready(element) {
    const newButton = document.createElement("button");
    newButton.classList.add("main-menu__start-button");
    newButton.innerText = START_BUTTON_TEXT;

    const newButtonWrapper = document.createElement("div");
    newButtonWrapper.classList.add("main-menu__button-wrapper");
    newButtonWrapper.appendChild(newButton);

    element.appendChild(newButtonWrapper);

    newButton.addEventListener("click", () => {
      const response = window.menuAPI.openMenu();

      console.log(response);
    });
  }
}
