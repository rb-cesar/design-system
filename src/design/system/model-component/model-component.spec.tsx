import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import ModelComponent from './model-component'

describe('ModelComponent', () => {
  test('dynamic component', () => {
    const placeholder = 'model'
    const inputValue = 'beautiful value'

    render(<ModelComponent component="input" placeholder={placeholder} defaultValue={inputValue} />)

    const model: HTMLInputElement = screen.getByPlaceholderText(placeholder)

    expect(model).toBeInTheDocument()
    expect(model?.defaultValue).toBe(inputValue)
  })
})
