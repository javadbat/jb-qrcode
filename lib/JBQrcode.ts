//TODO: replace it with new qrcode in agileverse portal
// import HTML from './JBQrcode.html';
// import CSS from './JBQrcode.scss';
// import { Elements } from "./Types";
// import QRCode, { QRCodeToDataURLOptions } from 'qrcode';
// export class JBQrcodeWebComponent extends HTMLElement {

//     elements!: Elements;
//     #value: null | string = null;
//     bgColor = '#ffffff';
//     qrColor = '#000';
//     #isOpen = false;
//     get isOpen() {
//         return this.#isOpen;
//     }
//     set isOpen(value: boolean) {
//         this.#isOpen = value;
//         if (value) {
//             this.elements.qrcodeWrapper.classList.add('--open');
//         } else {
//             this.elements.qrcodeWrapper.classList.remove('--open');
//         }
//     }
//     get value() {
//         return this.#value;
//     }
//     set value(value: string | null) {
//         this.#value = value;
//         const opts: QRCodeToDataURLOptions = {
//             errorCorrectionLevel: 'H',
//             type: 'image/jpeg',
//             margin: 1,
//             color: {
//                 dark: this.qrColor,
//                 light: this.bgColor
//             }
//         };
//         if (value !== null) {
//             QRCode.toDataURL(value, opts, (err, url) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 this.elements.placeholderWrapper.classList.add('--hidden');
//                 this.elements.qrcodeWrapper.classList.remove('--hidden');
//                 this.elements.qrCodeImage.src = url;
//             });
//         } else {
//             this.elements.placeholderWrapper.classList.remove('--hidden');
//             this.elements.qrcodeWrapper.classList.add('--hidden');

//         }

//     }
//     constructor() {
//         super();
//         this.initWebComponent();
//     }
//     connectedCallback() {
//         // standard web component event that called when all of dom is binded
//         this.callOnLoadEvent();
//         this.initProp();
//         this.callOnInitEvent();

//     }
//     callOnLoadEvent() {
//         const event = new CustomEvent('load', { bubbles: true, composed: true });
//         this.dispatchEvent(event);
//     }
//     callOnInitEvent() {
//         const event = new CustomEvent('init', { bubbles: true, composed: true });
//         this.dispatchEvent(event);
//     }
//     initWebComponent() {
//         const shadowRoot = this.attachShadow({
//             mode: 'open'
//         });
//         const html = `<style>${CSS}</style>` + '\n' + HTML;
//         const element = document.createElement('template');
//         element.innerHTML = html;
//         shadowRoot.appendChild(element.content.cloneNode(true));
//         this.elements = {
//             placeholderWrapper: shadowRoot.querySelector('.placeholder-wrapper')! as HTMLDivElement,
//             qrcodeWrapper: shadowRoot.querySelector('.qrcode-wrapper')! as HTMLDivElement,
//             qrCodeImage: shadowRoot.querySelector('.qrcode-image')! as HTMLImageElement,
//         };

//     }
//     registerEventListener() {
//         this.elements.qrcodeWrapper.addEventListener('click', this.toggleisOpen.bind(this));
//     }
//     toggleisOpen() {
//         this.isOpen = !this.isOpen;
//     }
//     initProp() {
//         this.registerEventListener();

//     }
//     static get observedAttributes() {
//         return ['value'];
//     }
//     attributeChangedCallback(name: string, oldValue: string, newValue: string) {
//         // do something when an attribute has changed
//         this.onAttributeChange(name, newValue);
//     }
//     onAttributeChange(name: string, value: string) {
//         switch (name) {
//             case 'value':
//                 this.value = value;
//                 break;
//         }

//     }
// }
// const myElementNotExists = !customElements.get('jb-qrcode');
// if (myElementNotExists) {
//     window.customElements.define('jb-qrcode', JBQrcodeWebComponent);
// }
