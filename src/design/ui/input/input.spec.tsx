import { ThemeProvider } from '@emotion/react'
import { render, screen } from '@testing-library/react'
import type { ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import { createTheme } from '@/design/system'

import Input from './input'

function renderWithMainTheme(element: ReactElement) {
  return render(<ThemeProvider theme={createTheme('main')}>{element}</ThemeProvider>)
}

describe('Input character counter', () => {
  test('shows how many characters the initial value has out of the maximum', () => {
    renderWithMainTheme(<Input counter maxLength={10} defaultValue="abc" />)

    expect(screen.getByText('3/10')).toBeInTheDocument()
  })

  test('shows the counter as zero when the field starts empty', () => {
    renderWithMainTheme(<Input counter maxLength={10} />)

    expect(screen.getByText('0/10')).toBeInTheDocument()
  })
})
