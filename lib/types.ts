import { EventTypeWithTarget } from 'jb-core';
import type { JBQRCodeWebComponent } from "./jb-qrcode"
import type { Options } from 'qr-code-styling';

export type ElementsObject = {
    componentWrapper: HTMLDivElement,
    qrCodeWrapper: HTMLDivElement,
    downloadButton: HTMLDivElement
}

export type JBQRCodeEventType<TEvent> = EventTypeWithTarget<TEvent, JBQRCodeWebComponent>
export type DotsOptions =  Options["dotsOptions"]
export type BackgroundOptions =  Options["backgroundOptions"]
export type CornersSquareOptions =  Options["cornersSquareOptions"]