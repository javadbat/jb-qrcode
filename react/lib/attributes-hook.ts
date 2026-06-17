import type { JBQRCodeWebComponent, BackgroundOptions, CornersSquareOptions, DotsOptions } from "jb-qrcode";
import { type RefObject, useEffect } from "react";

export type JBQRCodeAttributes = {
  width?: number,
  height?: number,
  downloadFileName?: string,
  dotsOptions?: DotsOptions
  dotsOption?: DotsOptions
  backgroundOptions?: BackgroundOptions
  cornersSquareOptions?: CornersSquareOptions

}
export function useJBQRCodeAttribute(element: RefObject<JBQRCodeWebComponent | null>, props: JBQRCodeAttributes) {
  useEffect(() => {
    if (element.current && props.width) {
      element.current.width = props.width
    }
  }, [props.width, element.current]);

  useEffect(() => {
    if (element.current && props.height) {
      element.current.height = props.height
    }
  }, [props.height, element.current]);

  useEffect(() => {
    if (element.current && props.downloadFileName) {
      element.current.downloadFileName = props.downloadFileName
    }
  }, [props.downloadFileName, element.current]);

  useEffect(() => {
    const dotsOptions = props.dotsOptions || props.dotsOption;
    if (element.current && dotsOptions) {
      element.current.dotsOptions = dotsOptions
    }
  }, [props.dotsOptions, props.dotsOption, element.current]);

  useEffect(() => {
    if (element.current && props.backgroundOptions) {
      element.current.backgroundOptions = props.backgroundOptions
    }
  }, [props.backgroundOptions, element.current]);

  useEffect(() => {
    if (element.current && props.cornersSquareOptions) {
      element.current.cornersSquareOptions = props.cornersSquareOptions
    }
  }, [props.cornersSquareOptions, element.current]);
}
