import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["name", "output"];
  greet() {
    if (this.nameTarget.value.length == 0) {
      this.outputTarget.textContent = `Hello, Stranger!`;
    } else {
      this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
    }
  }
}
