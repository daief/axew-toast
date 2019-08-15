/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-08-15 15:45:50
 * @Description:
 */
import { extendConfig } from '@axew/jugg';
import { join } from 'path';

const isProd = process.env.NODE_ENV === 'production';

export default extendConfig({
  plugins: ['@axew/jugg-plugin-lib'],
  webpack: ({ config }) => {
    if (!isProd) {
      config.entry('dev').add(join(__dirname, 'dev/index'));
    }
    return {
      output: {
        library: 'AxewToast',
        libraryTarget: 'umd',
      },
    };
  },
  filename: 'index',
  html: isProd
    ? false
    : {
        template: './dev/document.ejs',
      },
});
