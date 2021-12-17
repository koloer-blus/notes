import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/notes/",
  css: {
    modules: {
      generateScopedName: 'react_press_[name]__[local]__[hash:base64:5]'
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    modules: ['node_modules'],
    mainFiles: ['index'],
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.js', '.json', '.jsx'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: "components", replacement: path.resolve(__dirname, './src/components') },
      { find: "md", replacement: path.resolve(__dirname, './src/md') },
      { find: "hooks", replacement: path.resolve(__dirname, './src/hooks') },
      { find: "utils", replacement: path.resolve(__dirname, './src/utils') },
      { find: "style", replacement: path.resolve(__dirname, './src/style') },
    ]
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  }
})
