import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `your-transactions-menu`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class YourTransactionsMenu extends PolymerElement {
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
        value: 'your-transactions-menu',
      },
    };
  }
}

window.customElements.define('your-transactions-menu', YourTransactionsMenu);
