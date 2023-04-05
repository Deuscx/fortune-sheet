import { defineConfig } from 'vite'

import pkg from './package.json'

export default defineConfig({
  build: {
    cssCodeSplit: false,
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },

    rollupOptions: {
      external(id: string) {
        return Object.keys(pkg.dependencies).some(k =>
          new RegExp(`^${k}`).test(id),
        )
      },
    },
  },
})
