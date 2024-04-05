import "./index.css";
import { StartButton } from "./menu/startButton";

const body = document.querySelectorAll(".body");
const startButton = new StartButton(body[0]);

console.log(startButton);
