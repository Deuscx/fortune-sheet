import path from 'path'

import { defineConfig } from 'vite'
// import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react'
import pkg from './package.json'

export default defineConfig(() => {
  return {
    plugins: [
      reactRefresh(),
      // legacy({
      //   targets: ['defaults', 'not IE 11'],
      // }),
    ],
    build: {

      emptyOutDir: true,
      sourcemap: true,
      lib: {
        entry: 'src/index.ts',
        formats: ['es', 'cjs'],
        fileName: 'index',
        name: 'Workbook',
      },
      rollupOptions: {
        external(id: string) {
          return Object.keys(pkg.peerDependencies).some(k =>
            new RegExp(`^${k}`).test(id),
          )
        },
      },
    },
  }
})
