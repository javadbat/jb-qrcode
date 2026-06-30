'use client';
// biome-ignore lint/style/useImportType: <React used here>
import React, {useImperativeHandle, useRef} from 'react';
import 'jb-qrcode';
import type {JBQRCodeWebComponent} from 'jb-qrcode';
import { useEvents, type EventProps } from './events-hook';
import { useJBQRCodeAttribute, type JBQRCodeAttributes } from './attributes-hook';
import type { JBElementStandardProps } from 'jb-core/react';
import './module-declaration.js';


export const JBQRCode = React.forwardRef<JBQRCodeWebComponent, Props>((props, ref) => {
  const element = useRef<JBQRCodeWebComponent>(null);
  const {backgroundOptions,cornersSquareOptions,dotsOption,dotsOptions,downloadFileName,height,width, value, logo,onInit,onLoad,...otherProps } = props
  useJBQRCodeAttribute(element,{backgroundOptions,cornersSquareOptions,dotsOption,dotsOptions,downloadFileName,height,width})
  useEvents(element,{onInit,onLoad})
  useImperativeHandle(
    ref,
    () => element.current as JBQRCodeWebComponent,
    [element],
  );
  return (
    <jb-qrcode ref={element} logo={logo} value={value} {...otherProps}></jb-qrcode>
  )
});

type QRCodeProps = EventProps & JBQRCodeAttributes & {
    value:string,
    logo?:string,
}
export type Props = QRCodeProps & JBElementStandardProps<JBQRCodeWebComponent,keyof QRCodeProps>
JBQRCode.displayName = "JBQRCode";
