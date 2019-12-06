import _ from "lodash";
import "./assets/style.css";
import "./assets/2.css";
import "./assets/3.scss";
import "./assets/3.less";
import "./assets/3.styl";
import png from "./assets/3.png";

function component() {
  const element = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = "点击懒加载";
  button.onclick = () => {
    const promise = import("./assets/lazy");
    promise.then(module => {
      module.default();
    });
  };
  element.appendChild(button);
  element.classList.add("hello");
  const img = new Image();
  img.src = png;
  element.appendChild(img);
  return element;
}
document.body.appendChild(component());

console.log(123);
