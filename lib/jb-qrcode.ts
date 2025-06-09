import CSS from './jb-qrcode.scss';
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
    Object.assign(this.#dotsOptions,value);
    this.drawQrcode();
  }
  #cornersSquareOptions: DotsOptions = {
    color: "var(--image-color)",
    type: "square"
  }
  get cornersSquareOptions(){return this.#cornersSquareOptions}
  set cornersSquareOptions(value:CornersSquareOptions){
    Object.assign(this.#cornersSquareOptions,value);
    this.drawQrcode();
  }
  #backgroundOptions: BackgroundOptions = {
    color: "#fff",
  };
  public get backgroundOptions(): BackgroundOptions {
    return this.#backgroundOptions;
  }
  public set backgroundOptions(value: BackgroundOptions) {
    Object.assign(this.#backgroundOptions,value);
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
    if (value && value !== this.value) {
      this.#value = value
      this.drawQrcode();
    } else {
      this.#value = null;
    }
  }
  #logo: string | null = null;
  set logo(value: string) {
    this.#logo = value
  }
  get logo(): string | null {
    return this.#logo
  }
  constructor() {
    super();
    this.initWebComponent();
  }
  initWebComponent() {
    registerDefaultVariables();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const html = `<style>${CSS}</style>` + '\n' + renderHTML();
    const element = document.createElement('template');
    element.innerHTML = html;
    shadowRoot.appendChild(element.content.cloneNode(true));
    this.elements = {
      componentWrapper: shadowRoot.querySelector('.circle-chart-web-component')!,
      qrCodeWrapper: shadowRoot.querySelector('.qrcode-wrapper')!,
      downloadButton: shadowRoot.querySelector('#DownloadIcon')!,
    };
    this.#initEventListeners();
  }
  static get observedAttributes() {
    return ['value', 'logo', "file-name"];
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // do something when an attribute has changed
    this.onAttributeChange(name, newValue);
  }
  #initEventListeners() {
    this.elements.downloadButton.addEventListener("click", () => this.download())
  }
  onAttributeChange(name: string, value: string) {
    switch (name) {
      case 'value':
        this.value = value;
        break;
      case 'logo':
        this.logo = value;
        break;
      case 'file-name':
        this.downloadFileName = value;
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

