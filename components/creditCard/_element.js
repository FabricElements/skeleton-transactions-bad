/**
 @license
 Copyright (c) FabricElements. All rights reserved.
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `credit-card`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CreditCard extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'credit-card',
      },
    };
  }
}

window.customElements.define('credit-card', CreditCard);
