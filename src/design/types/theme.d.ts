export type ColorSchema = 'light' | 'dark' | 'main'

export type ColorTheme = keyof Omit<Palette, 'grey' | 'text'>

export type ColorByTheme = {
  [K in ColorSchema]: string
}

export type ColorGrid = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export type PaletteItem = {
  main: string
  luminance: (lum: number) => string
}

export type PaletteTextItem = {
  primary: string
  secondary: string
  light: string
  dark: string
  contrastColor: string
}

export type Palette = {
  primary: PaletteItem
  secondary: PaletteItem
  success: PaletteItem
  error: PaletteItem
  warn: PaletteItem
  background: PaletteItem
  text: PaletteTextItem
  grey: ColorGrid
}

export type BreakpointItem = {
  value: number
  down: () => string
  up: () => string
}

export type Breakpoints = {
  xs: BreakpointItem
  sm: BreakpointItem
  md: BreakpointItem
  lg: BreakpointItem
  xl: BreakpointItem
  down: (value: number) => string
  up: (value: number) => string
}

export type DesignTheme = {
  schema: ColorSchema
  palette: Palette
  breakpoints: Breakpoints
  spacing: (value?: number) => string
}

declare module '@emotion/react' {
  export interface Theme {
    schema: DesignTheme['schema']
    palette: DesignTheme['palette']
    breakpoints: DesignTheme['breakpoints']
    spacing: DesignTheme['spacing']
  }
}
