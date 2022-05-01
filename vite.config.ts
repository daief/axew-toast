import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: 'src/index.ts',
      name: 'AxewToast',
      fileName: fmt => `index.${fmt}.js`,
    }
  }
})