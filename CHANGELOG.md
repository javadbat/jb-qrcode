# Changelog

## Unreleased

### Added

- Added `component` and `download-icon` CSS parts for richer QR styling.
- Added QR shell, border, shadow, padding, download button, and overlay behavior variables.
- Added a standard Styling MDX page and 12 reusable QR code style recipes.

### Changed

- Updated component color defaults to use the shared semantic content and surface tokens.
- The QR download action now uses a native button with visible keyboard focus.
- Updated examples to use renamed design-system CSS variables.
- Standardized all custom theme recipes on `jb-qrcode.<theme>-style`, public parts, and states.

### Fixed

- Added the missing `jb-core/theme` build external and UMD global mapping.
