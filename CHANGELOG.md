# Changelog

## Unreleased

### Added

- Added `component` and `download-icon` CSS parts for richer QR styling.
- Added QR shell, border, shadow, padding, download button, and overlay behavior variables.
- Added a standard Styling MDX page and 12 reusable QR code style recipes.

### Changed

- Made custom-element module evaluation SSR-safe by extending `JBBaseComponent` where needed and registering elements through the shared `defineWebComponent()` helper; raised the minimum `jb-core` version to `0.35.0`.
- Updated component color defaults to use the shared semantic content and surface tokens.
- The QR download action now uses a native button with visible keyboard focus.
- Updated examples to use renamed design-system CSS variables.
- Standardized all custom theme recipes on `jb-qrcode.<theme>-style`, public parts, and states.

### Fixed

- Added the missing `jb-core/theme` build external and UMD global mapping.
