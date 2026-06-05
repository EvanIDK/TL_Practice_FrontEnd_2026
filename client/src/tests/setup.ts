import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import '@testing-library/jest-dom/vitest'

// Очищаем DOM после каждого теста
afterEach(() => {
  cleanup()
})
