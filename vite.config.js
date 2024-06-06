import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@header',
        replacement: path.resolve(__dirname, 'src/components/header')
      },
      {
        find: '@footer',
        replacement: path.resolve(__dirname, 'src/components/footer')
      },
      {
        find: '@card',
        replacement: path.resolve(__dirname, 'src/components/card')
      },
      {
        find: '@collapse',
        replacement: path.resolve(__dirname, 'src/components/collapse')
      },
      {
        find: '@banner',
        replacement: path.resolve(__dirname, 'src/components/banner')
      },
      {
        find: '@slideshow',
        replacement: path.resolve(__dirname, 'src/components/slideshow')
      },
      {
        find: '@images',
        replacement: path.resolve(__dirname, 'src/assets/images')
      },
      {
        find: '@accueil',
        replacement: path.resolve(__dirname, 'src/pages/accueil')
      },
      {
        find: '@apropos',
        replacement: path.resolve(__dirname, 'src/pages/apropos')
      },
      {
        find: '@erreur',
        replacement: path.resolve(__dirname, 'src/pages/erreur')
      },
      {
        find: '@logement',
        replacement: path.resolve(__dirname, 'src/pages/logement')
      },
      {
        find: '@rating',
        replacement: path.resolve(__dirname, 'src/components/rating')
      },
    ]
  }
})
