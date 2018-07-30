/**
 @license
 Copyright (c) FabricElements. All rights reserved.
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item-body.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './icons.js';

/**
 * `credit-card`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CreditCard extends PolymerElement {
    constructor() {
        super();
    }

    static get template() {
        return html`
        <style>
            :host {
              color: var(--paper-grey-900);
              display: block;
              margin: 0;
              font-family: 'Roboto', sans-serif;
              --paper-item-icon-width: 60px;
            }
            iron-icon {
              width: 35px;
              height: 35px;
            }
            .container {
               padding: 1rem;
               display: grid;
               margin: auto;
            }
            .logo-paper-item {
                margin: auto 0;
            }
            .money-paper-item {
                margin: auto;
                @apply --layout-horizontal;
                @apply --layout-center;
                flex-grow: 0;
                flex-shrink: 0;
                flex-wrap: nowrap;
                padding-left: 1rem;
                text-align: right;
            }
            .card-text {
                color: var(--paper-grey-500);
            }
            .currency {
                color: var(--paper-grey-500);
            }
        </style>
        <paper-icon-item>
            <iron-icon icon="[[cardIcon]]" slot="item-icon"></iron-icon>
            <paper-item-body two-line>
                <div class="card-description">[[cardDescription]]</div>
                <div secondary class="card-text">[[cardText]]</div>
            </paper-item-body>
            <div class="money-paper-item">
              <div class="currency">[[currency]]</div>
              <div class="amount">[[amount]]</div>
            </div>
        </paper-icon-item>
        `;
    }

    /**
     * @return {object}
     */
    static get properties() {
        return {
            cardType: {
                type: String,
                value: 'masterpass',
                observer: '_stateObserver',
            },
            cardDescription: {
                type: String,
                value: 'Basic subscription'
            },
            cardText: {
                type: String,
                value: 'Lorem ipsum dolor sit amet'
            },
            currency: {
                type: String,
                value: 'USD'
            },
            amount: {
                type: Number,
                value: '100.34'
            }
        };
    }

    /**
     * State observer
     * @param {string} state
     * @private
     */
    _stateObserver(state) {
      switch(state) {
        case 'american-express':
            this.cardIcon = 'credit-card:american-express';
            break;
        case 'capital-one':
            this.cardIcon = 'credit-card:capital-one';
            break;
        case 'mastercard':
            this.cardIcon = 'credit-card:mastercard'
            break;
        case 'visa':
            this.cardIcon = 'credit-card:visa';
            break;
        case 'citi':
            this.cardIcon = 'credit-card:citi';
            break;
        case 'bank-of-america':
            this.cardIcon = 'credit-card:bank-of-america';
            break;
        case 'hsbc':
            this.cardIcon = 'credit-card:hsbc';
            break;
        case 'discover-network':
            this.cardIcon = 'credit-card:discover-network';
            break;
        case 'jcb':
            this.cardIcon = 'credit-card:jcb';
            break;
        case 'diners-club':
            this.cardIcon = 'credit-card:diners-club';
            break;
        case 'union-pay':
            this.cardIcon = 'credit-card:union-pay';
            break;
        case 'alipay':
            this.cardIcon = 'credit-card:alipay';
            break;
        case 'apple-pay':
            this.cardIcon = 'credit-card:apple-pay';
            break;
        case 'bancontact-mister-cash':
            this.cardIcon = 'credit-card:bancontact-mister-cash';
            break;
        case 'giro-pay':
            this.cardIcon = 'credit-card:giro-pay';
            break;
        case 'google-pay':
            this.cardIcon = 'credit-card:google-pay';
            break;
        case 'ideal':
            this.cardIcon = 'credit-card:ideal';
            break;
        case 'maestro':
            this.cardIcon = 'credit-card:maestro';
            break;
        case 'masterpass':
            this.cardIcon = 'credit-card:masterpass';
            break;
        case 'microsoft':
            this.cardIcon = 'credit-card:microsoft';
            break;
        case 'visa-checkout':
            this.cardIcon = 'credit-card:visa-checkout';
            break;
        case 'webchat':
            this.cardIcon = 'credit-card:webchat';
            break;
      }
    }
}

window.customElements.define('credit-card', CreditCard);
