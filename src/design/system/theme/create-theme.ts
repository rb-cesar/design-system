import { Theme } from '@emotion/react'

import { ColorSchema, Palette } from '@/design/types'
import { calculateLuminance } from '@/design/utils'

export const defaultPalette: Palette = {
  primary: {
    main: '#8833ee',
    luminance: (lum: number) => calculateLuminance('#8833ee', lum),
  },
  secondary: {
    main: '#1f8dff',
    luminance: (lum: number) => calculateLuminance('#1f8dff', lum),
  },
  success: {
    main: '#4fdf34',
    luminance: (lum: number) => calculateLuminance('#4fdf34', lum),
  },
  error: {
    main: '#ff2826',
    luminance: (lum: number) => calculateLuminance('#ff2826', lum),
  },
  warn: {
    main: '#f8e200',
    luminance: (lum: number) => calculateLuminance('#f8e200', lum),
  },
  background: {
    main: '#ffffff',
    luminance: (lum: number) => calculateLuminance('#ffffff', lum),
  },
  text: {
    primary: '#efefef',
    secondary: '#efefef',
    light: '#ffffff',
    dark: '#353535',
    contrastColor: '#efefef',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
}

function getPalette(colorSchema: ColorSchema) {
  switch (colorSchema) {
    case 'main':
      return defaultPalette
    default:
      return defaultPalette
  }
}

export function createTheme(colorSchema: ColorSchema) {
  const theme: Theme = {
    schema: colorSchema,
    spacing: value => `${8 * (value || 1)}px`,
    palette: getPalette(colorSchema),
    breakpoints: {
      xs: {
        value: 1200,
        down: () => '@media screen and (max-width: 1200px)',
        up: () => '@media screen and (min-width: 1200px)',
      },
      sm: {
        value: 800,
        down: () => '@media screen and (max-width: 800px)',
        up: () => '@media screen and (min-width: 800px)',
      },
      md: {
        value: 600,
        down: () => '@media screen and (max-width: 600px)',
        up: () => '@media screen and (min-width: 600px)',
      },
      lg: {
        value: 500,
        down: () => '@media screen and (max-width: 500px)',
        up: () => '@media screen and (min-width: 500px)',
      },
      xl: {
        value: 415,
        down: () => '@media screen and (max-width: 415px)',
        up: () => '@media screen and (min-width: 415px)',
      },
      down: value => `@media screen and (max-width: ${value}px)`,
      up: value => `@media screen and (min-width: ${value}px)`,
    },
  }

  return theme
}
