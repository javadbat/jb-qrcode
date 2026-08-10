import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { JBQRCode } from 'jb-qrcode/react';
import type { BackgroundOptions, CornersSquareOptions, DotsOptions } from 'jb-qrcode';
import '../../../docs/styles/ant-design.css';
import '../../../docs/styles/aurora.css';
import '../../../docs/styles/bootstrap.css';
import '../../../docs/styles/candy.css';
import '../../../docs/styles/carbon.css';
import '../../../docs/styles/cupertino.css';
import '../../../docs/styles/fluent.css';
import '../../../docs/styles/forest.css';
import '../../../docs/styles/material.css';
import '../../../docs/styles/porcelain.css';
import '../../../docs/styles/sunset.css';
import '../../../docs/styles/terminal.css';
import './styles/style-ant-design.css';
import './styles/style-aurora.css';
import './styles/style-bootstrap.css';
import './styles/style-candy.css';
import './styles/style-carbon.css';
import './styles/style-cupertino.css';
import './styles/style-fluent.css';
import './styles/style-forest.css';
import './styles/style-material.css';
import './styles/style-porcelain.css';
import './styles/style-sunset.css';
import './styles/style-terminal.css';

const meta = {
  title: "Components/JBQRCode/Style",
  component: JBQRCode,
} satisfies Meta<typeof JBQRCode>;

export default meta;
type Story = StoryObj<typeof meta>;

const qrValue = "https://javadbat.github.io/design-system/";

const styleSamples = [
  { name: "Carbon", themeClassName: "carbon-style", qrClassName: "carbon-style", dotsType: "square", cornersType: "square" },
  { name: "Aurora", themeClassName: "aurora-style", qrClassName: "aurora-style", dotsType: "extra-rounded", cornersType: "extra-rounded" },
  { name: "Forest", themeClassName: "forest-style", qrClassName: "forest-style", dotsType: "dots", cornersType: "extra-rounded" },
  { name: "Sunset", themeClassName: "sunset-style", qrClassName: "sunset-style", dotsType: "rounded", cornersType: "extra-rounded" },
  { name: "Porcelain", themeClassName: "porcelain-style", qrClassName: "porcelain-style", dotsType: "classy", cornersType: "extra-rounded" },
  { name: "Candy", themeClassName: "candy-style", qrClassName: "candy-style", dotsType: "rounded", cornersType: "dot" },
  { name: "Terminal", themeClassName: "terminal-style", qrClassName: "terminal-style", dotsType: "square", cornersType: "square" },
  { name: "Material", themeClassName: "material-style", qrClassName: "material-style", dotsType: "rounded", cornersType: "extra-rounded" },
  { name: "Fluent", themeClassName: "fluent-style", qrClassName: "fluent-style", dotsType: "classy-rounded", cornersType: "extra-rounded" },
  { name: "Bootstrap", themeClassName: "bootstrap-style", qrClassName: "bootstrap-style", dotsType: "square", cornersType: "square" },
  { name: "Cupertino", themeClassName: "cupertino-style", qrClassName: "cupertino-style", dotsType: "rounded", cornersType: "extra-rounded" },
  { name: "Ant Design", themeClassName: "ant-design-style", qrClassName: "ant-design-style", dotsType: "classy", cornersType: "extra-rounded" },
] as const;

function QRCodeStyleSample({
  cornersType,
  dotsType,
  qrClassName,
  themeClassName,
}: {
  cornersType: CornersSquareOptions["type"];
  dotsType: DotsOptions["type"];
  qrClassName: string;
  themeClassName: string;
}) {
  const dotsOptions: DotsOptions = {
    color: "var(--jb-qrcode-image-color)",
    type: dotsType,
  };
  const cornersSquareOptions: CornersSquareOptions = {
    color: "var(--jb-qrcode-image-color)",
    type: cornersType,
  };
  const backgroundOptions: BackgroundOptions = {
    color: "transparent",
  };

  return (
    <div className={`${themeClassName} qrcode-demo-stack`}>
      <JBQRCode
        backgroundOptions={backgroundOptions}
        className={qrClassName}
        cornersSquareOptions={cornersSquareOptions}
        dotsOptions={dotsOptions}
        height={220}
        value={qrValue}
        width={220}
      />
      <div className="qrcode-demo-caption">Scan design system docs</div>
    </div>
  );
}

export const Gallery: Story = {
  name: "Gallery",
  render: () => (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
      gap: "1.25rem",
      alignItems: "start",
      width: "min(100%, 92rem)",
    }}>
      {styleSamples.map((sample) => (
        <section
          key={sample.qrClassName}
          className={sample.themeClassName}
          style={{
            display: "grid",
            justifyItems: "center",
            gap: "0.875rem",
            minWidth: 0,
            padding: "1rem",
            background: "var(--jb-surface, #ffffff)",
            border: "1px solid var(--jb-border-color, #e5e7eb)",
            borderRadius: "0.75rem",
            boxShadow: "0 0.75rem 1.75rem oklch(0% 0 0 / 0.08)",
          }}
        >
          <div style={{
            width: "100%",
            color: "var(--jb-content-primary, #334155)",
            fontSize: "0.875rem",
            fontWeight: 700,
            lineHeight: 1.4,
            textAlign: "center",
          }}>
            {sample.name}
          </div>
          <QRCodeStyleSample {...sample} />
        </section>
      ))}
    </div>
  ),
};

export const Default: Story = {
  name: "Default",
  render: () => <QRCodeStyleSample cornersType="square" dotsType="square" qrClassName="" themeClassName="" />,
};

export const Carbon: Story = {
  name: "Carbon",
  render: () => <QRCodeStyleSample {...styleSamples[0]} />,
};

export const Aurora: Story = {
  name: "Aurora",
  render: () => <QRCodeStyleSample {...styleSamples[1]} />,
};

export const Forest: Story = {
  name: "Forest",
  render: () => <QRCodeStyleSample {...styleSamples[2]} />,
};

export const Sunset: Story = {
  name: "Sunset",
  render: () => <QRCodeStyleSample {...styleSamples[3]} />,
};

export const Porcelain: Story = {
  name: "Porcelain",
  render: () => <QRCodeStyleSample {...styleSamples[4]} />,
};

export const Candy: Story = {
  name: "Candy",
  render: () => <QRCodeStyleSample {...styleSamples[5]} />,
};

export const Terminal: Story = {
  name: "Terminal",
  render: () => <QRCodeStyleSample {...styleSamples[6]} />,
};

export const Material: Story = {
  name: "Material",
  render: () => <QRCodeStyleSample {...styleSamples[7]} />,
};

export const Fluent: Story = {
  name: "Fluent",
  render: () => <QRCodeStyleSample {...styleSamples[8]} />,
};

export const Bootstrap: Story = {
  name: "Bootstrap",
  render: () => <QRCodeStyleSample {...styleSamples[9]} />,
};

export const Cupertino: Story = {
  name: "Cupertino",
  render: () => <QRCodeStyleSample {...styleSamples[10]} />,
};

export const AntDesign: Story = {
  name: "Ant Design",
  render: () => <QRCodeStyleSample {...styleSamples[11]} />,
};
