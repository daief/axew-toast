/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-08-15 15:45:50
 * @Description:
 */
import { extendConfig } from '@axew/jugg';

export default extendConfig({
  plugins: ['@axew/jugg-plugin-lib'],
  webpack: {
    output: {
      library: 'AxewToast',
      libraryTarget: 'umd',
    },
  },
  filename: 'index',
  html: false,
});
