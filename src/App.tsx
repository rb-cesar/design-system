import { useState } from 'react'
import { css, ThemeProvider } from '@emotion/react'
import { RiUserFill, RiAliensFill } from 'react-icons/ri'

import { Button } from './design/ui'
import { createTheme, GlobalStyle, GlobalCSS } from './design/system'

import img from './assets/react.svg'
import Input from './design/ui/input'
import Select from './design/ui/select'
import Option from './design/ui/option'

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
        <Input counter label="Name" maxLength={128} startAdornment={<span>R$ </span>} endAdornment={<span>MS</span>} />
        <Select
          label="Selector"
          defaultValue="odd2"
          onSelect={value => console.log(value)}
          startAdornment={<RiUserFill size={16} />}
        >
          <Option value="odd1">Option 1</Option>
          <Option value="odd2">
            Option 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est enim, illum autem vero voluptates
            dolor ipsum minima amet aut ab eaque accusamus saepe deleniti debitis iusto eius quisquam tempore quae?
          </Option>
          <Option value="odd3">
            <RiAliensFill size={16} />
            Option 3
          </Option>
        </Select>
      </div>
    </ThemeProvider>
  )
}

export default App
