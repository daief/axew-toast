import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig({
  root: 'doc',
  base: './',
  plugins: [
    // @ts-ignore
    {
      enforce: 'pre',
      transformIndexHtml: html => {
        return html
          .replace(
            '<!-- __GOOGLE_GA__ -->',
            '<script src="/def-common/js/ga.js"></script>'
          )
          .replace('<span id="pls_version"></span>', pkg.version);
      },
    },
  ],
});
