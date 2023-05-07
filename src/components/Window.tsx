import React from "react";
import { html, LitElement, css } from "lit";
import { createComponent } from "@lit-labs/react";
import { customElement } from "lit/decorators.js";

@customElement("window-layout")
class WindowWC extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      width: 100%;
    }
    .vertical-layout {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `;

  render() {
    return html`<div>
      <div class="vertical-layout"><slot></slot></div>
    </div>`;
  }
}

export const WindowLayout = createComponent({
  react: React,
  tagName: "window-layout",
  elementClass: WindowWC,
});
