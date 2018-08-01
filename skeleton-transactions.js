import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-card/paper-card.js';
import * as moment from 'moment';


/**
 * `skeleton-transactions`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SkeletonTransactions extends PolymerElement {
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
        paper-card {
          border-radius: 8%;
        }
      .card-content {
        padding: 0.7rem 1rem;
      }
      .rate-header {
        color: var(--paper-grey-800);
        @apply --paper-font-headline;
      }
      .rate-name {
        color: var(--paper-grey-800);
        @apply --paper-font-headline;
      }
      .day {
        font-size: 2rem;
      }
      .ending {
        color: var(--paper-grey-600);
      }
      </style>
      <div class="title">Your transactions</div>
      <!-- tabs -->
      <paper-tabs selected="0">
        <paper-tab selected={{daily}}>[[daily]]</paper-tab>
        <paper-tab selected={{weekly}}>[[weekly]]</paper-tab>
        <paper-tab selected={{monthly}}>[[monthly]]</paper-tab>
        <paper-tab selected={{yearly}}>[[yearly]]</paper-tab>
        <paper-tab selected={{all}}>[[all]]</paper-tab>
      </paper-tabs>
      <br/>

      <!-- calendar -->
      <paper-card class="rate">
        <div class="card-content">
          <div class="rate-header"><span class="day">[[day]]</span><span class="ending">[[ending]]</span></div>
          <div class="rate-name">[[today]]</div>
        </div>
      </paper-card>

      <!-- cards -->

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
      },
      day: {
        type: Number,
        value: 10,
      },
      ending: {
        type: String,
        value: 'th',
      },
      today: {
        type: String,
        value: 'Today',
      },
    };
  }
}

window.customElements.define('skeleton-transactions', SkeletonTransactions);
