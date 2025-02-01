import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-qrcode",
    path: "./lib/JBQrcode.ts",
    outputPath: "./dist/JBQrcode.js",
    umdName: "JBQrcode",
    external: ["qrcode"],
    globals: {
      qrcode: "QRCode",
    },
  },
];
export const reactComponentList: ReactComponentBuildConfig[] = [
 
];