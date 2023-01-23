import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(old => ++old)
  }

  return (
    <div className="App" data-testid="app">
      <button onClick={handleIncrement}>Count: {count}</button>
    </div>
  )
}

export default App
