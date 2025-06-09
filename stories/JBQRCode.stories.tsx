import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from "react";

import { JBQRCode, Props } from "jb-qrcode/react";


const meta: Meta<Props> = {
  title: "Components/JBQRCode",
  component: JBQRCode,
};
export default meta;
type Story = StoryObj<typeof JBQRCode>;

export const Normal: Story = {
  args: {
    value: "https://github.com/javadbat/design-system",
  }
};
export const WithLogo: Story = {
  args: {
    value: "https://github.com/javadbat/design-system",
    logo: "https://javadbat.github.io/design-system/images/logo-square.svg",
  }
};

export const WithCustomWidth: Story = {
  args: {
    value: "https://github.com/javadbat/design-system",
    width: 420,
    height: 420
  }
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
    }
  }
};
