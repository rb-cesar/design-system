import { ThemeProvider } from '@emotion/react'
import { createTheme } from '../src/design/system/theme/create-theme'
import { GlobalStyle, GlobalCSS } from '../src/design/system/theme/global-styles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  showBar: true,
  viewMode: 'docs',
  previewTabs: {
    canvas: { hidden: true },
    docs: { hidden: false },
  },
}

const defaultTheme = createTheme('main')

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle styles={GlobalCSS} />
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]
