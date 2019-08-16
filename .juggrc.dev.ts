/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-08-16 12:44:49
 * @Description:
 */
import { extendConfig } from '@axew/jugg';
import { join } from 'path';

export default extendConfig({
  outputDir: 'example',
  webpack: ({ config }) => {
    config.entry('dev').add(join(__dirname, 'dev/index'));
  },
  html: {
    template: './dev/document.ejs',
  },
});
