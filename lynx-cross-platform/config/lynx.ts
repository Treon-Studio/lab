import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';

export const customPlugins = [
  pluginQRCode({
    schema(url) {
      // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
      return `${url}?fullscreen=true`;
    },
  }),
  pluginReactLynx(),
];
