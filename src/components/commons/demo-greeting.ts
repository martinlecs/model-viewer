import React from "react";
import { html, LitElement } from "lit";
import { createComponent } from "@lit-labs/react";
import { customElement, property } from "lit/decorators.js";

@customElement("demo-greeting")
class DemoGreetingWC extends LitElement {
  @property() name = "Somebody";

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

export const DemoGreeting = createComponent({
  react: React,
  tagName: "demo-greeting",
  elementClass: DemoGreetingWC,
});
