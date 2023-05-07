import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("minimise-icon")
export class MinimiseIconWC extends LitElement {
  render() {
    return html`<svg
      width="35"
      height="35"
      viewBox="0 0 31 29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.5 15.5H10.5" strokeLinecap="round" />
    </svg>`;
  }
}
