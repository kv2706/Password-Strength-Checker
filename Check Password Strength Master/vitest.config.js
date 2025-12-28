import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: [
        'dist/index.mjs'
      ],
      exclude: [
        'node_modules/',
        'test/',
        '**/*.test.js',
        '**/*.spec.js',
        '**/*.config.js',
        '**/*.d.ts'
      ],
      thresholds: {
        global: {
          branches: 95,
          functions: 95,
          lines: 95,
          statements: 95
        }
      }
    }
  }
})