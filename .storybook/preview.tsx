import { ThemeProvider } from '@emotion/react'
import type { Preview } from '@storybook/react-vite'

import { createTheme, GlobalCSS, GlobalStyle } from '../src/design/system'

const mainTheme = createTheme('main')

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle styles={GlobalCSS} />
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
