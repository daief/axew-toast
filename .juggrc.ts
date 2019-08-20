/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-08-15 15:45:50
 * @Description:
 */
import { extendConfig, CHAIN_CONFIG_MAP } from '@axew/jugg';
import { resolve } from 'path';

export default extendConfig({
  plugins: ['@axew/jugg-plugin-lib'],
  webpack: ({ config }) => {
    config
      .entry(CHAIN_CONFIG_MAP.entry.INDEX)
      .add(resolve(__dirname, 'src/style/index'));
    return {
      output: {
        library: 'AxewToast',
        libraryTarget: 'umd',
      },
    };
  },
  filename: 'index',
  html: false,
});
