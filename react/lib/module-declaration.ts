import type { JBQRCodeWebComponent } from 'jb-qrcode';

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
