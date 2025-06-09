import { useEvent } from "jb-core/react";
import { RefObject } from "react";
import type {JBQRCodeWebComponent, JBQRCodeEventType} from 'jb-qrcode';

export type EventProps = {
  /**
   * when component loaded, in most cases component is already loaded before react mount so you dont need this but if you load web-component dynamically with lazy load it will be called after react mount
   */
  onLoad?: (e: JBQRCodeEventType<CustomEvent>) => void,
    /**
   * when all property set and ready to use, in most cases component is already loaded before react mount so you dont need this but if you load web-component dynamically with lazy load it will be called after react mount
   */
  onInit?: (e: JBQRCodeEventType<CustomEvent>) => void,
  onClose?: (e: JBQRCodeEventType<CustomEvent>) => void,
}
export function useEvents(element:RefObject<JBQRCodeWebComponent>,props:EventProps){
  useEvent(element, 'load', props.onLoad, true);
  useEvent(element, 'init', props.onInit, true);
}