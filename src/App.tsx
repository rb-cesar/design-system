import { useState } from 'react'
import img from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(old => ++old)
  }

  return (
    <div className="App" data-testid="app">
      <img src={img} />
      <button onClick={handleIncrement}>Count: {count}</button>
    </div>
  )
}

export default App
