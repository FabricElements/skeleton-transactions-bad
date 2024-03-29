import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `calendar-cards`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CalendarCards extends PolymerElement {
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
        value: 'calendar-cards',
      },
    };
  }
}

window.customElements.define('calendar-cards', CalendarCards);
