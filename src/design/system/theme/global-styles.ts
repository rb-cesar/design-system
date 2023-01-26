import { css, Global } from '@emotion/react'

export const GlobalStyle = Global

export const GlobalCSS = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

  :root {
    font-size: 14px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  html,
  body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Lato', sans-serif;
  }
`
