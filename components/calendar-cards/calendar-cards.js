import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';

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
        font-family: 'Roboto', sans-serif;
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

    <paper-card class="rate">
      <div class="card-content">
        <div class="rate-header"><span class="day">[[day]]</span><span class="ending">[[ending]]</span></div>
        <div class="rate-name">[[today]]</div>
      </div>
    </paper-card>
  `;
}
static get properties() {
  return {
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

window.customElements.define('calendar-cards', CalendarCards);
