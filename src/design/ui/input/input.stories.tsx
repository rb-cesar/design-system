import type { Meta, StoryObj } from '@storybook/react-vite'
import { FaJsSquare, FaUserAlt } from 'react-icons/fa'

import Input from './input'

const paletteColors = ['primary', 'secondary', 'success', 'error', 'warn', 'background'] as const

const meta = {
  title: 'design/input',
  component: Input,
  parameters: { docs: { source: { state: 'open' } } },
  argTypes: {
    maxLength: { control: 'number', description: 'Limits the number of characters in the field' },
    counter: { control: 'boolean' },
    fullWidth: {
      control: 'boolean',
      description: 'Occupies the entire width of the parent element',
    },
    focusColor: {
      control: 'select',
      options: paletteColors,
      description: 'Palette color option for input focus',
    },
    helperTextColor: { control: 'select', options: paletteColors },
    startAdornment: { control: false },
    endAdornment: { control: false },
    helperText: { control: false },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    label: 'Username',
    placeholder: 'Anonymous',
    maxLength: 128,
    counter: true,
    fullWidth: false,
    focusColor: 'primary',
    helperTextColor: 'warn',
    startAdornment: <FaUserAlt size={14} />,
    endAdornment: <FaJsSquare size={14} />,
    helperText: <small>Helper text</small>,
  },
}
