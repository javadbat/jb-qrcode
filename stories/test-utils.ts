import type { JBQRCodeWebComponent } from 'jb-qrcode';
import { expect, waitFor } from 'storybook/test';

export function getQRCode(canvasElement: HTMLElement) {
  const qrCode = canvasElement.querySelector<JBQRCodeWebComponent>('jb-qrcode');
  expect(qrCode).toBeTruthy();
  expect(qrCode!.shadowRoot).toBeTruthy();
  return qrCode!;
}

export function getQRCodeWrapper(qrCode: JBQRCodeWebComponent) {
  const wrapper = qrCode.shadowRoot?.querySelector<HTMLElement>('.qrcode-wrapper');
  expect(wrapper).toBeTruthy();
  return wrapper!;
}

export async function waitForRenderedSvg(qrCode: JBQRCodeWebComponent) {
  const wrapper = getQRCodeWrapper(qrCode);

  await waitFor(() => {
    expect(wrapper.querySelector('svg')).toBeTruthy();
  });

  return wrapper.querySelector<SVGSVGElement>('svg')!;
}

export function expectSvgSize(svg: SVGSVGElement, width: number, height: number) {
  expect(svg.getAttribute('width')).toBe(String(width));
  expect(svg.getAttribute('height')).toBe(String(height));
  expect(svg.getAttribute('viewBox')).toBe(`0 0 ${width} ${height}`);
}

export function expectSvgHasQRCodeContent(svg: SVGSVGElement) {
  expect(svg.querySelectorAll('rect, path, circle').length).toBeGreaterThan(10);
}

export async function expectSvgHasLogo(svg: SVGSVGElement) {
  const logo = svg.querySelector('image');
  const href = logo?.getAttribute('href') ?? logo?.getAttribute('xlink:href') ?? '';

  if (logo) {
    expect(href.startsWith('data:image/')).toBe(true);
  }
}
