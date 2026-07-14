import { i18n } from "jb-core/i18n";
import { dictionary } from "./i18n";

export function renderHTML(): string {
  return /* html */ `
  <div class="jb-qrcode-web-component" part="component">
      <div class="qrcode-wrapper" part="qrcode" role="img" aria-label="${dictionary.get(i18n, "qrCode")}">
      </div>
      <div class="overlay" part="overlay">      
          <button class="download-button" part="download-button" type="button" aria-label="${dictionary.get(i18n, "downloadQRCode")}">
            <svg id="DownloadIcon" part="download-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path id="S1" d="M15.0382 12.5084L12.1222 15.4364L9.20621 12.5084"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="S3" d="M12.1222 15.4361L12.1222 3.39508"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="S2" d="M16.7549 8.12799H17.6879C19.7229 8.12799 21.3719 9.77699 21.3719 11.813V16.697C21.3719 18.727 19.7269 20.372 17.6969 20.372L6.55695 20.372C4.52195 20.372 2.87195 18.722 2.87195 16.687V11.802C2.87195 9.77299 4.51795 8.12799 6.54695 8.12799L7.48895 8.12799" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
      </div>
  </div>
  `;
}
