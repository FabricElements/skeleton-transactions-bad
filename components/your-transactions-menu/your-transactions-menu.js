import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';

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
          font-family: 'Roboto', sans-serif;
          color: var(--paper-grey-500);
        }
        .title {
          background-color: var(--paper-grey-300);
          color: var(--paper-grey-900);
          padding: 1rem;
        }
        paper-tab {
          --paper-tab-ink: var(--paper-blue-300);
        }
        paper-tabs {
          --paper-tabs-selection-bar-color: var(--paper-blue-300);
        }
        .iron-selected{
          /* the slected tab */
          color: var(--paper-grey-900);
        }
      </style>
      <div class="title">Your transactions</div>
      <paper-tabs selected="0">
        <paper-tab selected={{daily}}>[[daily]]</paper-tab>
        <paper-tab selected={{weekly}}>[[weekly]]</paper-tab>
        <paper-tab selected={{monthly}}>[[monthly]]</paper-tab>
        <paper-tab selected={{yearly}}>[[yearly]]</paper-tab>
        <paper-tab selected={{all}}>[[all]]</paper-tab>
      </paper-tabs>
    `;
  }
  static get properties() {
    return {
      daily: {
        type: String,
        value: 'Daily',
      },
      weekly: {
        type: String,
        value: 'Weekly',
      },
      monthly: {
        type: String,
        value: 'Monthly',
      },
      yearly: {
        type: String,
        value: 'Yearly',
      },
      all: {
        type: String,
        value: 'All',
      }
    };
  }
}

window.customElements.define('your-transactions-menu', YourTransactionsMenu);
