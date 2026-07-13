import { JBDictionary } from "jb-core/i18n";

export type JBQRCodeDictionary = {
  qrCode: string;
  downloadQRCode: string;
};

export const dictionary = new JBDictionary<JBQRCodeDictionary>({
  fa: {
    qrCode: "کد QR",
    downloadQRCode: "دانلود کد QR",
  },
  en: {
    qrCode: "QR code",
    downloadQRCode: "Download QR code",
  },
});
