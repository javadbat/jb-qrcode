import CSS from './jb-qrcode.css';
import VariablesCSS from './variables.css';
import { renderHTML } from './render';
import type { BackgroundOptions, CornersSquareOptions, DotsOptions, ElementsObject } from './types.js';
import { registerDefaultVariables } from 'jb-core/theme';
import QRCodeStyling, { FileExtension} from 'qr-code-styling'
export * from './types.js';
export class JBQRCodeWebComponent extends HTMLElement {
  elements!: ElementsObject;
  #value: string | null = null;
  #width: number = 240;
  #height: number = 240;
  #qrCode: QRCodeStyling | null = null;
  downloadFileName: string = "qr";
  #dotsOptions: DotsOptions = {
    color: "var(--image-color)",
    type: "square"
  }
  get dotsOptions(){return this.#dotsOptions}
  set dotsOptions(value:DotsOptions){
    if(value === undefined) return;
    this.#dotsOptions = { ...this.#dotsOptions, ...value };
    this.drawQrcode();
  }
  #cornersSquareOptions: CornersSquareOptions = {
    color: "var(--image-color)",
    type: "square"
  }
  get cornersSquareOptions(){return this.#cornersSquareOptions}
  set cornersSquareOptions(value:CornersSquareOptions){
    if(value === undefined) return;
    this.#cornersSquareOptions = { ...this.#cornersSquareOptions, ...value };
    this.drawQrcode();
  }
  #backgroundOptions: BackgroundOptions = {
    color: "#fff",
  };
  public get backgroundOptions(): BackgroundOptions {
    return this.#backgroundOptions;
  }
  public set backgroundOptions(value: BackgroundOptions) {
    if(value === undefined) return;
    this.#backgroundOptions = { ...this.#backgroundOptions, ...value };
    this.drawQrcode();
  }
  get width() {
    return this.#width;
  }
  set width(value: number) {
    this.#width = value;
    this.drawQrcode();
    this.style.width = `${value}px`;
  }
  get height() {
    return this.#height;
  }
  set height(value: number) {
    if (this.#height !== value) {
      this.#height = value;
      this.drawQrcode();
      this.style.height = `${value}px`;
    }
  }
  get value(): string | null {
    return this.#value;
  }
  set value(value: string | null) {
    if (value) {
      if (value === this.#value) return;
      this.#value = value;
      this.drawQrcode();
    } else {
      this.#value = null;
      this.elements.qrCodeWrapper.innerHTML = '';
    }
  }
  #logo: string | null = null;
  set logo(value: string | null) {
    this.#logo = value;
    this.drawQrcode();
  }
  get logo(): string | null {
    return this.#logo
  }
  constructor() {
    super();
    this.initWebComponent();
  }
  connectedCallback() {
    this.callOnLoadEvent();
    this.callOnInitEvent();
  }
  callOnLoadEvent() {
    const event = new CustomEvent("load", { bubbles: false, composed: false });
    this.dispatchEvent(event);
  }
  callOnInitEvent() {
    const event = new CustomEvent("init", { bubbles: false, composed: false });
    this.dispatchEvent(event);
  }
  initWebComponent() {
    registerDefaultVariables();
    const shadowRoot = this.attachShadow({ mode: 'open',clonable:true, serializable:true });
    const html = `<style>${CSS} ${VariablesCSS}</style>` + '\n' + renderHTML();
    const element = document.createElement('template');
    element.innerHTML = html;
    shadowRoot.appendChild(element.content.cloneNode(true));
    this.elements = {
      componentWrapper: shadowRoot.querySelector('.jb-qrcode-web-component')!,
      qrCodeWrapper: shadowRoot.querySelector('.qrcode-wrapper')!,
      downloadButton: shadowRoot.querySelector('#DownloadIcon')!,
    };
    this.#initEventListeners();
  }
  static get observedAttributes() {
    return ['value', 'logo', "file-name", "width", "height"];
  }
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    // do something when an attribute has changed
    this.onAttributeChange(name, newValue);
  }
  #initEventListeners() {
    this.elements.downloadButton.addEventListener("click", () => this.download())
  }
  onAttributeChange(name: string, value: string | null) {
    switch (name) {
      case 'value':
        this.value = value;
        break;
      case 'logo':
        this.logo = value;
        break;
      case 'file-name':
        this.downloadFileName = value || "qr";
        break;
      case 'width':
        if (value !== null && !Number.isNaN(Number(value))) {
          this.width = Number(value);
        }
        break;
      case 'height':
        if (value !== null && !Number.isNaN(Number(value))) {
          this.height = Number(value);
        }
        break;
    }
  }
  drawQrcode() {
    if (!this.value) {
      return;
    }
    this.#qrCode = new QRCodeStyling({
      width: this.#width,
      height: this.#height,
      type: "svg",
      data: this.value,
      image: this.logo ?? undefined,
      dotsOptions: this.dotsOptions,
      cornersSquareOptions: this.cornersSquareOptions,
      backgroundOptions: this.backgroundOptions,
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 0
      }
    });
    this.elements.qrCodeWrapper.innerHTML = '';
    this.#qrCode.append(this.elements.qrCodeWrapper);
  }
  download(fileName = this.downloadFileName, extension: FileExtension = "png") {
    this.#qrCode?.download({ name: fileName, extension: extension });
  }
}
const myElementNotExists = !customElements.get('jb-qrcode');
if (myElementNotExists) {
  window.customElements.define('jb-qrcode', JBQRCodeWebComponent);
}

