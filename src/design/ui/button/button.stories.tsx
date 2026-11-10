import type { Meta, StoryObj } from '@storybook/react-vite'

import Button, { type VariantTheme } from './button'

const paletteColors = ['primary', 'secondary', 'success', 'error', 'warn'] as const
const variants = ['filled', 'outlined', 'text'] as const

const meta = {
  title: 'design/button',
  component: Button,
  args: { component: 'button', children: 'Button', color: 'primary', variant: 'filled' },
  argTypes: {
    color: { control: 'select', options: paletteColors },
    variant: { control: 'inline-radio', options: variants },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

function renderOneButtonPerColor(variant: VariantTheme) {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {paletteColors.map(color => (
        <Button key={color} component="button" color={color} variant={variant}>
          {color}
        </Button>
      ))}
    </div>
  )
}

export const Playground: Story = {}

export const Filled: Story = { render: () => renderOneButtonPerColor('filled') }

export const Outlined: Story = { render: () => renderOneButtonPerColor('outlined') }

export const Text: Story = { render: () => renderOneButtonPerColor('text') }

/** The `component` prop swaps the rendered tag, so a link can look like a button. */
export const AsAnchor: Story = {
  render: () => (
    <Button component="a" color="secondary" variant="outlined" href="#">
      Anchor example
    </Button>
  ),
}
