import React from "react";
import { appWindow } from "@tauri-apps/api/window";
import { html, LitElement, css } from "lit";
import { createComponent } from "@lit-labs/react";
import { customElement } from "lit/decorators.js";
import "./commons/icons/MinimiseIcon";
import "./commons/icons/CloseIcon";
import "./commons/icons/MaximiseIcon";

@customElement("top-bar")
class TopBarWC extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 38px;
      z-index: var(--sl-z-index-drawer);
      gap: var(--sl-spacing-x-small);
      justify-content: space-between;
    }
    .top-bar__icon {
      display: flex;
      justify-content: space-around;
      z-index: inherit;
      gap: var(--sl-spacing-x-small);
      padding: 0 var(--sl-spacing-3x-small) var(--sl-spacing-2x-small)
        var(--sl-spacing-3x-small);
    }
    .top-bar__icon__title {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }
    .top-bar__icon__title > p {
      font-weight: var(--sl-font-weight-bold);
    }
    .top-bar__icon__version {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }
    .top-bar__progress-bar {
      display: flex;
      z-index: inherit;
    }
    .top-bar__window-controls {
      display: flex;
      justify-content: flex-end;
      z-index: inherit;
      align-items: center;
      stroke: var(--sl-color-amber-500);
    }
    .top-bar__window-controls__control {
      display: flex;
      justify-content: center;
      z-index: inherit;
      align-items: center;
      border-radius: var(--sl-border-radius-medium);
      height: 38px;

      &:hover {
        background-color: var(--sl-color-neutral-700);
        cursor: pointer;
      }
    }
  `;

  render() {
    return html`
      <div class="top-bar__icon">
        <div class="top-bar__icon__title">
          <p>model-viewer</p>
        </div>
        <div class="top-bar__icon__version">
          <p>
            ${(__VERSION_TAG__ || __COMMIT_HASH__) +
            (__GIT_CLEAN__ ? "" : "-dirty")}
          </p>
        </div>
      </div>
      <div class="top-bar__progress-bar"></div>
      <div class="top-bar__window-controls">
        <div
          class="top-bar__window-controls__control"
          @click="${() => appWindow.minimize()}"
        >
          <minimise-icon></minimise-icon>
        </div>
        <div
          class="top-bar__window-controls__control"
          @click="${() => appWindow.toggleMaximize()}"
        >
          <maximise-icon></maximise-icon>
        </div>
        <div
          class="top-bar__window-controls__control"
          @click="${() => appWindow.close()}"
        >
          <close-icon></close-icon>
        </div>
      </div>
    `;
  }
}

export const TopBar = createComponent({
  react: React,
  tagName: "top-bar",
  elementClass: TopBarWC,
});
