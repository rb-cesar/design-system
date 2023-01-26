import { useState } from 'react'
import { css, ThemeProvider } from '@emotion/react'

import { Button } from './design/ui'
import { createTheme, GlobalStyle, GlobalCSS } from './design/system'

import img from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(old => ++old)
  }

  return (
    <ThemeProvider theme={createTheme('main')}>
      <GlobalStyle styles={GlobalCSS} />
      <div
        className="App"
        data-testid="app"
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 12px;
        `}
      >
        <img src={img} />
        <Button color="primary" variant="filled" onClick={handleIncrement}>
          Count: {count}
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default App
