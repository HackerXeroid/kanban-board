import "./style.css";
import { app } from "./app";

const renderHTML = (html) => {
  document.querySelector("#root").insertAdjacentHTML("beforebegin", html);
};

renderHTML(app);
