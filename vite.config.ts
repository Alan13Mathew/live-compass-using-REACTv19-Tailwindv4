import { defineConfig, FSWatcher } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import mkcert from 'vite-plugin-mkcert'
import react from '@vitejs/plugin-react'
import * as fs from 'fs'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),mkcert()],
  server:{
    https: {},
    host: true,
    port:5173,
  }
})
