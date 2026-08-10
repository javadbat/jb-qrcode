import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-qrcode",
    path: "./web-component/lib/jb-qrcode.ts",
    outputPath: "./web-component/dist/jb-qrcode.js",
    tsConfigPath: "./web-component/tsconfig.json",
    umdName: "JBQRCode",
    external: ["qr-code-styling", "jb-core/theme", "jb-core/i18n"],
    globals: {
      "qr-code-styling": "QRCodeStyling",
      "jb-core/theme": "JBCoreTheme",
      "jb-core/i18n": "JBCoreI18N",
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
