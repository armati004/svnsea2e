const path = require('path');

const config = {
  root: 'src/',
  base: '/systems/svnsea2e/',
  publicDir:  path.resolve(__dirname, 'public'),
  server: {
    port: 30001,
    open: true,
    proxy: {
      '^(?!/systems/svnsea2e)': 'http://192.168.68.50:30000/',
      '/socket.io': {
        target: 'ws://192.168.68.50:30000',
        ws: true,
      },
    }
  },
  esbuild: {
    keepNames: true,
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      name: 'svnsea2e',
      entry: path.resolve(__dirname, 'src', 'svnsea2e.ts'),
      formats: ['es'],
      fileName: 'svnsea2e',
    },
  },
}

export default config;
