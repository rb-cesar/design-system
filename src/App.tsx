import { css, ThemeProvider } from '@emotion/react'
import { useState } from 'react'
import img from './assets/react.svg'
import { createTheme, GlobalCSS, GlobalStyle } from './design/system'
import { Button } from './design/ui'
import Input from './design/ui/input'

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
        <img src={img} alt="React logo" />
        <Button color="primary" variant="filled" onClick={handleIncrement}>
          Count: {count}
        </Button>
        <Input
          counter
          label="Name"
          maxLength={128}
          startAdornment={<span>R$ </span>}
          endAdornment={<span>MS</span>}
        />
      </div>
    </ThemeProvider>
  )
}

export default App
