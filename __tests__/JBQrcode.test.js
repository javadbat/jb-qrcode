import { describe, expect, it, beforeEach, afterEach, jest } from '@jest/globals';
import '../dist/JBQrcode';
describe('jb-qr-code',()=>{
    it("should render",()=>{
        const element = document.createElement('jb-qrcode');
        document.body.appendChild(element);
        expect(element).toBeTruthy();
    })
    it("should contain component class in its html",()=>{
        const element = document.createElement('jb-qrcode');
        document.body.appendChild(element);
        expect(element.shadowRoot.innerHTML).toContain('jb-qrcode-web-component');
    });
});