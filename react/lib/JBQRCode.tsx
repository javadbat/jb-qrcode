import React, {useRef} from 'react';
import 'jb-qrcode';
import {JBQRCodeWebComponent} from 'jb-qrcode';
import { useEvents, type EventProps } from './events-hook';
import { useJBQRCodeAttribute, type JBQRCodeAttributes } from './attributes-hook';

export type Props = EventProps & JBQRCodeAttributes & {
    value:string,
    logo?:string,
}

declare module "react" {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'jb-qrcode': JBQrCodetype;
      }
      interface JBQrCodetype extends React.DetailedHTMLProps<React.HTMLAttributes<JBQRCodeWebComponent>, JBQRCodeWebComponent> {
        logo?:string,
        value?: string,
      }
    }
}

export function JBQRCode(props:Props) {
  const element = useRef<JBQRCodeWebComponent>(null);
  useJBQRCodeAttribute(element,props)
  useEvents(element,props)
  return (
    <jb-qrcode ref={element} logo={props.logo} value={props.value}></jb-qrcode>
  )
}