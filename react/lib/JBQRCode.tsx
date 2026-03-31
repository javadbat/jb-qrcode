'use client';
// biome-ignore lint/style/useImportType: <React used here>
import React, {useRef} from 'react';
import 'jb-qrcode';
import type {JBQRCodeWebComponent} from 'jb-qrcode';
import { useEvents, type EventProps } from './events-hook';
import { useJBQRCodeAttribute, type JBQRCodeAttributes } from './attributes-hook';
import type { JBElementStandardProps } from 'jb-core/react';


export function JBQRCode(props:Props) {
  const element = useRef<JBQRCodeWebComponent>(null);
  const {backgroundOptions,cornersSquareOptions,dotsOption,downloadFileName,height,width, value, logo,onClose,onInit,onLoad,...otherProps } = props
  useJBQRCodeAttribute(element,{backgroundOptions,cornersSquareOptions,dotsOption,downloadFileName,height,width})
  useEvents(element,{onClose,onInit,onLoad})
  return (
    <jb-qrcode ref={element} logo={logo} value={value} {...otherProps}></jb-qrcode>
  )
}

type QRCodeProps = EventProps & JBQRCodeAttributes & {
    value:string,
    logo?:string,
}
export type Props = QRCodeProps & JBElementStandardProps<JBQRCodeWebComponent,keyof QRCodeProps>

declare module "react" {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'jb-qrcode': JBQRCodetype;
      }
      interface JBQRCodetype extends React.DetailedHTMLProps<React.HTMLAttributes<JBQRCodeWebComponent>, JBQRCodeWebComponent> {
        logo?:string,
        value?: string,
      }
    }
}
