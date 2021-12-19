import { render } from "react-dom";
import { createElement } from "react";

render(
  createElement("h1", null, "I am a react component :)"),
  document.getElementById("react")
);
