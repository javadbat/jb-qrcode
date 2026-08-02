import type { Meta, StoryObj } from '@storybook/react-vite';
import React from "react";

import { JBQRCode } from "jb-qrcode/react";
import { expect, fn, waitFor } from 'storybook/test';
import {
  expectSvgHasLogo,
  expectSvgHasQRCodeContent,
  expectSvgSize,
  getQRCode,
  getQRCodeWrapper,
  waitForRenderedSvg,
} from './test-utils';


const meta = {
  title: "Components/JBQRCode",
  component: JBQRCode,
} satisfies Meta<typeof JBQRCode>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    value: "https://github.com/javadbat/design-system",
  },
  play: async ({ canvasElement, args }) => {
    const qrCode = getQRCode(canvasElement);
    const svg = await waitForRenderedSvg(qrCode);

    expect(qrCode.value).toBe(args.value);
    expectSvgSize(svg, 240, 240);
    expectSvgHasQRCodeContent(svg);
  },
};
export const WithLogo: Story = {
  args: {
    value: "https://github.com/javadbat/design-system",
    logo: "https://javadbat.github.io/design-system/images/logo-square.svg",
  },
  play: async ({ canvasElement, args }) => {
    const qrCode = getQRCode(canvasElement);
    const svg = await waitForRenderedSvg(qrCode);

    expect(qrCode.value).toBe(args.value);
    expect(qrCode.logo).toBe(args.logo);
    await expectSvgHasLogo(svg);
  },
};

export const WithCustomWidth: Story = {
  args: {
    value: "https://github.com/javadbat/design-system",
    width: 420,
    height: 420
  },
  play: async ({ canvasElement, args }) => {
    const qrCode = getQRCode(canvasElement);
    const svg = await waitForRenderedSvg(qrCode);

    expect(qrCode.width).toBe(args.width);
    expect(qrCode.height).toBe(args.height);
    expect(qrCode.style.width).toBe(`${args.width}px`);
    expect(qrCode.style.height).toBe(`${args.height}px`);
    expectSvgSize(svg, args.width!, args.height!);
  },
};

export const CustomizedLook: Story = {
  args: {
    value: "https://github.com/javadbat/design-system",
    dotsOption: {
      color: "var(--jb-primary)",
      gradient: {
        type: "linear",
        rotation: 45,
        colorStops: [{ color: "var(--jb-primary)", offset: 0 }, { color: "var(--jb-secondary)", offset: 0.8 }, { color: "var(--jb-primary)", offset: 1 }]
      },
      type: "rounded"
    },
    cornersSquareOptions:{
      type:"extra-rounded",
      color:"var(--jb-primary)"
    },
    backgroundOptions: {
      color: "#fff",
    },
  },
  play: async ({ canvasElement, args }) => {
    const qrCode = getQRCode(canvasElement);
    const svg = await waitForRenderedSvg(qrCode);

    await waitFor(() => {
      expect(qrCode.dotsOptions?.color).toBe(args.dotsOption?.color);
      expect(qrCode.dotsOptions?.type).toBe(args.dotsOption?.type);
      expect(qrCode.dotsOptions?.gradient).toEqual(args.dotsOption?.gradient);
      expect(qrCode.cornersSquareOptions?.color).toBe(args.cornersSquareOptions?.color);
      expect(qrCode.cornersSquareOptions?.type).toBe(args.cornersSquareOptions?.type);
      expect(qrCode.backgroundOptions?.color).toBe(args.backgroundOptions?.color);
    });

    expect(svg.querySelector('linearGradient')).toBeTruthy();
    expect(svg.querySelectorAll('linearGradient stop').length).toBe(args.dotsOption?.gradient?.colorStops.length);
  },
};

export const EmptyValue: Story = {
  args: {
    value: "",
  },
  play: async ({ canvasElement }) => {
    const qrCode = getQRCode(canvasElement);
    await waitFor(() => {
      expect(getQRCodeWrapper(qrCode).querySelector('svg')).toBeNull();
    });
  },
};

export const Download: Story = {
  args: {
    value: "https://github.com/javadbat/design-system",
    downloadFileName: "design-system",
  },
  play: async ({ canvasElement }) => {
    const qrCode = getQRCode(canvasElement);
    await waitForRenderedSvg(qrCode);

    expect(qrCode.downloadFileName).toBe("design-system");
    expect(qrCode.shadowRoot?.querySelector('[part="download-button"]')).toBeTruthy();

    const originalDownload = qrCode.download;
    const download = fn();
    qrCode.download = download;
    qrCode.download("design-system", "svg");
    expect(download).toHaveBeenCalledWith("design-system", "svg");
    qrCode.download = originalDownload;
  },
};

export const Events: Story = {
  args: {
    value: "https://github.com/javadbat/design-system",
    onLoad: fn(),
    onInit: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const qrCode = getQRCode(canvasElement);
    qrCode.dispatchEvent(new CustomEvent("load"));
    qrCode.dispatchEvent(new CustomEvent("init"));

    await waitFor(() => {
      expect(args.onLoad).toHaveBeenCalled();
      expect(args.onInit).toHaveBeenCalled();
    });
  },
};
