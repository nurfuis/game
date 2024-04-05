import "./index.css";
import { StartButton } from "./menu/openMenu/startButton";

const body = document.querySelectorAll(".body");
const startButton = new StartButton(body[0]);
console.log("Start button loaded:", startButton);
