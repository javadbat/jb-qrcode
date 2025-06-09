import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-qrcode",
    path: "./lib/jb-qrcode.ts",
    outputPath: "./dist/jb-qrcode.js",
    umdName: "JBQRCode",
    external: ["qr-code-styling"],
    globals: {
      "qr-code-styling": "QRCodeStyling",
    },
  },
];
export const reactComponentList: ReactComponentBuildConfig[] = [
   {
    name: "jb-qrcode-react",
    path: "./react/lib/JBQRCode.tsx",
    outputPath: "./react/dist/JBQRCode.js",
    external: ["jb-qrcode", "prop-types", "react","jb-core", "jb-core/react"],
    globals: {
      react: "React",
      "jb-qrcode":"JBQRCode",
      "prop-types": "PropTypes",
      "jb-core": "JBCore",
      "jb-core/react": "JBCoreReact",
    },
    umdName: "JBQRCodeReact",
    dir: "./react"
  },
];