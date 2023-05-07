import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("close-icon")
export class CloseIconWC extends LitElement {
  render() {
    return html`<svg
      width="35"
      height="35"
      viewBox="0 0 31 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.3804 17.8804L12.619 11.119" strokeLinecap="round" />
      <path d="M12.6196 17.8804L19.381 11.119" strokeLinecap="round" />
    </svg>`;
  }
}