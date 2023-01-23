import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('should be render', () => {
    render(<App />)
    expect(screen.getByTestId('app')).toBeInTheDocument()
  })
})
