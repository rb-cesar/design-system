import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const sourceFolder = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' })],
  resolve: {
    alias: { '@': sourceFolder },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup-tests.ts'],
    clearMocks: true,
  },
})
