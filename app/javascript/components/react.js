import { render } from "react-dom";
import { createElement } from "react";

render(
  createElement("h3", null, "I am a react component :)"),
  document.getElementById("react")
);
