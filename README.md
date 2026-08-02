# jb-qrcode

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-qrcode)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-qrcode/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-qrcode)](https://www.npmjs.com/package/jb-qrcode)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-qrcode)

`jb-qrcode` is a QR code web component built on [`qr-code-styling`](https://www.npmjs.com/package/qr-code-styling). It renders an SVG QR code, supports styling options, can show a center logo, and includes a hover overlay with a download button.

- Works with only a `value`.
- Supports custom QR width and height.
- Supports a center logo image.
- Exposes `qr-code-styling` options for dots, corner squares, and background.
- Includes an overlay download button.
- Supports CSS variables and shadow parts for styling.

## When to use

Use `jb-qrcode` when you need to render a QR code for a URL, text, payment link, invite link, or any other scannable string. See the [basic QR demo](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--normal) for the default rendering.

Use a server-generated QR image when the QR code must be rendered before JavaScript runs or when you need a static asset in non-browser contexts.

## Demo

- Explore the [QR examples](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--normal), including [logos](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--with-logo), [custom sizing](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--with-custom-width), [rendering options](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--customized-look), and [downloads](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--download).

## Using With JS Frameworks

<a href="https://github.com/javadbat/jb-qrcode/tree/main/react" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/React.js-jb--qrcode%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" /></a>

Other integrations: <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#angular" target="_blank" rel="noopener noreferrer">Angular</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#vue" target="_blank" rel="noopener noreferrer">Vue</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#nuxt" target="_blank" rel="noopener noreferrer">Nuxt</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#svelte" target="_blank" rel="noopener noreferrer">Svelte</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#sveltekit" target="_blank" rel="noopener noreferrer">SvelteKit</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#solidjs" target="_blank" rel="noopener noreferrer">SolidJS</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#lit" target="_blank" rel="noopener noreferrer">Lit</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#nextjs" target="_blank" rel="noopener noreferrer">Next.js</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#astro" target="_blank" rel="noopener noreferrer">Astro</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#blazor" target="_blank" rel="noopener noreferrer">Blazor</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#server-rendered-templates" target="_blank" rel="noopener noreferrer">Server-rendered templates</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#wordpress" target="_blank" rel="noopener noreferrer">WordPress</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#alpinejs-and-htmx" target="_blank" rel="noopener noreferrer">Alpine.js and HTMX</a>

## Installation

```sh
npm i jb-qrcode
```

```js
import 'jb-qrcode';
```

```html
<jb-qrcode value="https://javadbat.github.io/design-system/"></jb-qrcode>
```

## API reference

### Attributes

| name | type | default | description |
| --- | --- | --- | --- |
| `value` | `string` | `null` | QR code data. When empty, no QR code is rendered; see the [empty value example](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--empty-value). |
| `logo` | `string` | `null` | Optional center logo image URL; see the [logo example](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--with-logo). |
| `file-name` | `string` | `qr` | Default file name used by the overlay download button and `download()`; see the [download example](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--download). |
| `width` | `number` | `240` | QR render width in pixels. Also sets host inline width; see [custom sizing](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--with-custom-width). |
| `height` | `number` | `240` | QR render height in pixels. Also sets host inline height; see [custom sizing](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--with-custom-width). |

### Properties

| name | type | readonly | description |
| --- | --- | --- | --- |
| `value` | `string \| null` | no | QR code data; see the [value example](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--normal). |
| `logo` | `string \| null` | no | Optional center logo image URL; see the [logo example](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--with-logo). |
| `width` | `number` | no | QR render width in pixels; see [custom sizing](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--with-custom-width). |
| `height` | `number` | no | QR render height in pixels; see [custom sizing](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--with-custom-width). |
| `downloadFileName` | `string` | no | Default file name used by `download()`; see the [download example](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--download). |
| `dotsOptions` | `DotsOptions` | no | Dot rendering options passed to `qr-code-styling`; see [rendering options](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--customized-look). |
| `cornersSquareOptions` | `CornersSquareOptions` | no | Corner square rendering options passed to `qr-code-styling`; see [rendering options](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--customized-look). |
| `backgroundOptions` | `BackgroundOptions` | no | Background rendering options passed to `qr-code-styling`; see [rendering options](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--customized-look). |

### Methods

| name | returns | description |
| --- | --- | --- |
| `drawQrcode()` | `void` | Recreates and appends the QR SVG using the current value and options; see [rendering options](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--customized-look). |
| `download(fileName?, extension?)` | `void` | Downloads the current QR code. `extension` defaults to `"png"`; see the [download example](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--download). |

### Events

| event | description |
| --- | --- |
| `load` | Dispatched from `connectedCallback`; see the [events example](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--events). |
| `init` | Dispatched from `connectedCallback` after `load`; see the [events example](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--events). |

## Value

Set `value` to the URL or text to encode. See the [basic value demo](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--normal); an [empty value](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--empty-value) clears the QR wrapper.

```html
<jb-qrcode value="https://www.google.com"></jb-qrcode>
```

```js
const qrCode = document.querySelector('jb-qrcode');

qrCode.value = 'https://javadbat.github.io/design-system/';
```

When `value` is empty or `null`, the QR wrapper is cleared.

## Logo

Pass a logo URL to place an image in the center of the QR code; see the [logo demo](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--with-logo).

```html
<jb-qrcode
  value="https://javadbat.github.io/design-system/"
  logo="https://javadbat.github.io/design-system/images/logo-square.svg"
></jb-qrcode>
```

```js
const qrCode = document.querySelector('jb-qrcode');

qrCode.logo = 'https://javadbat.github.io/design-system/images/logo-square.svg';
```

The logo is passed to `qr-code-styling` as `image` with `crossOrigin: "anonymous"`.

## Size

Set `width` and `height` to control the generated SVG dimensions and host size. See the [custom size demo](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--with-custom-width).

```html
<jb-qrcode value="https://example.com" width="320" height="320"></jb-qrcode>
```

```js
const qrCode = document.querySelector('jb-qrcode');

qrCode.width = 320;
qrCode.height = 320;
```

## Download

Use the overlay button or call `download()` directly; the [download demo](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--download) shows both the file name and programmatic API.

The hover overlay contains a download button. It calls `download()` and saves a PNG by default.

```html
<jb-qrcode value="https://example.com" file-name="invite-link"></jb-qrcode>
```

```js
const qrCode = document.querySelector('jb-qrcode');

qrCode.downloadFileName = 'invite-link';
qrCode.download();
qrCode.download('invite-link-svg', 'svg');
```

## Rendering options

Customize dots, corner squares, and background through the same option objects accepted by `qr-code-styling`. See the [customized look demo](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--customized-look).

The rendering option properties use the same option objects as [`qr-code-styling`](https://www.npmjs.com/package/qr-code-styling).

```js
const qrCode = document.querySelector('jb-qrcode');

qrCode.dotsOptions = {
  color: 'var(--jb-primary)',
  gradient: {
    type: 'linear',
    rotation: 45,
    colorStops: [
      { color: 'var(--jb-primary)', offset: 0 },
      { color: 'var(--jb-secondary)', offset: 0.8 },
      { color: 'var(--jb-primary)', offset: 1 },
    ],
  },
  type: 'rounded',
};

qrCode.cornersSquareOptions = {
  type: 'extra-rounded',
  color: 'var(--jb-primary)',
};

qrCode.backgroundOptions = {
  color: '#fff',
};
```

## CSS parts and variables

For complete styling guidance, live examples, and copyable style recipes, see [Styling](https://javadbat.github.io/design-system/?path=/docs/components-jbqrcode-styling) and the [style gallery](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode-style--gallery).

| part | description |
| --- | --- |
| `component` | Outer QR square wrapper. |
| `qrcode` | Wrapper where the generated QR SVG is appended. |
| `overlay` | Hover overlay over the QR code. |
| `download-button` | Download button inside the overlay. |
| `download-icon` | Download SVG icon. |

| CSS variable name | description |
| --- | --- |
| `--jb-qrcode-width` | Default host width when the width property does not set an inline size. |
| `--jb-qrcode-height` | Default host height when the height property does not set an inline size. |
| `--jb-qrcode-border-radius` | Radius of the QR square and overlay. |
| `--jb-qrcode-padding` | Padding around the generated QR SVG. |
| `--jb-qrcode-download-button-size` | Download button width and height. |
| `--jb-qrcode-download-button-border-radius` | Download button border radius. |
| `--jb-qrcode-overlay-gap` | Gap between overlay controls. |
| `--jb-qrcode-image-color` | Default QR dot and corner color. |
| `--jb-qrcode-bg-color` | QR component shell background. |
| `--jb-qrcode-border-color` | QR component shell border color. |
| `--jb-qrcode-box-shadow` | QR component shell shadow. |
| `--jb-qrcode-overlay-bg-color` | Hover overlay background color. |
| `--jb-qrcode-overlay-button-color` | Download icon color. |
| `--jb-qrcode-overlay-button-bg-color-hover` | Download button hover background color. |
| `--jb-qrcode-overlay-button-color-hover` | Download icon hover color. |
| `--jb-qrcode-border-width` | QR component shell border width. |
| `--jb-qrcode-border-style` | QR component shell border style. |
| `--jb-qrcode-overlay-opacity` | Overlay opacity before hover. |
| `--jb-qrcode-overlay-opacity-hover` | Overlay opacity while the component is hovered. |
| `--jb-qrcode-overlay-backdrop-filter` | Backdrop filter applied to the overlay. |

```css
jb-qrcode {
  --jb-qrcode-image-color: #111827;
  --jb-qrcode-overlay-bg-color: rgb(17 24 39 / 60%);
}

jb-qrcode::part(download-button) {
  border-radius: 0.5rem;
}
```

## Accessibility notes

- The generated QR code is visual content. Add nearby text or an accessible link to the encoded value when users need a non-visual alternative; see the [basic QR demo](https://javadbat.github.io/design-system/?path=/story/components-jbqrcode--normal) for the visual presentation.
- The overlay download control is inside shadow DOM. If keyboard access to downloading is required, call `download()` from an external button in your app.

## Related Docs

- See [`jb-qrcode/react`](https://github.com/javadbat/jb-qrcode/tree/main/react) if you want to use this component in React.
- See [`qr-code-styling`](https://www.npmjs.com/package/qr-code-styling) for supported rendering option values.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import `jb-qrcode` once before using `<jb-qrcode>`.
- Use the `value` attribute/property for the encoded QR data.
- Use `logo` for the optional center image URL.
- Use `dotsOptions`, `cornersSquareOptions`, and `backgroundOptions` as JavaScript properties; they are object values, not HTML attributes.
- Use `file-name` in HTML and `downloadFileName` in JavaScript.
- Use `download(fileName?, extension?)` for programmatic downloads.
- This package includes [`custom-elements.json`](./custom-elements.json) and points to it with the package.json `customElements` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In `custom-elements.json`, `exports.kind: "js"` describes JavaScript/TypeScript exports and `exports.kind: "custom-element-definition"` maps the `jb-qrcode` tag name to `JBQRCodeWebComponent`.
