import styled from '@emotion/styled'
import { Theme } from '@emotion/react'

import { ModelComponent } from '@/design/system'
import { DynamicProps, TagType } from '@/design/types'

type BtnCls = {
  variant?: string
  className?: string
}

export type ColorTheme = keyof Omit<Theme['palette'], 'grey' | 'text'>

export type VariantTheme = 'filled' | 'outlined' | 'text'

export type ButtonProps<T extends TagType> = Omit<DynamicProps<T>, 'color'> & {
  color?: ColorTheme
  variant?: VariantTheme
}

const animationDelay = 350

function rippleEffect(ev: any) {
  const buttonElement: HTMLButtonElement = ev.currentTarget
  const rippleElement = document.createElement('span')

  rippleElement.classList.add('ripple')

  buttonElement.classList.add('ripple-container')
  buttonElement.appendChild(rippleElement)

  setTimeout(() => {
    rippleElement.remove()
    buttonElement.classList.remove('ripple-container')
  }, animationDelay + 5)
}

const StyledButton = styled(ModelComponent)<{ color: ColorTheme }>`
  position: relative;
  cursor: pointer;
  display: flex;
  border: none;
  outline: none;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  border-radius: 4px;
  padding: 8px 12px;
  transition: 150ms;
  overflow: hidden;

  &.filled {
    color: #fff;
    background-color: ${({ theme, color }) => theme.palette[color].main};

    :hover {
      background-color: ${({ theme, color }) => theme.palette[color].luminance(-0.2)};
    }
  }

  &.outlined {
    color: ${({ theme, color }) => theme.palette[color].main};
    border: 1px solid ${({ theme, color }) => theme.palette[color].main};
    background-color: transparent;

    :hover {
      background-color: ${({ theme, color }) => theme.palette[color].main + '22'};
    }
  }

  &.text {
    color: ${({ theme, color }) => theme.palette[color].main};
    background-color: transparent;

    :hover {
      background-color: ${({ theme, color }) => theme.palette[color].main + '22'};
    }
  }

  .ripple {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1);
    z-index: 2;
    width: 0;
    height: auto;
    opacity: 0;
    aspect-ratio: 1/1;
    border-radius: 999px;
    pointer-events: none;
    animation: ripple ${animationDelay}ms linear forwards;
    background-color: ${({ theme, color }) => theme.palette[color].luminance(0.4) + 'dd'};
  }

  @keyframes ripple {
    from {
      width: 0;
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    to {
      width: calc(150%);
      opacity: 0;
    }
  }
`

function getClassName({ className, variant }: BtnCls) {
  const clsName = className || ''
  const clsVariant = `${variant || 'filled'}`

  return `${clsVariant} ${clsName}`
}

function Button<T extends TagType = 'a' | 'button' | 'label' | 'div' | 'option'>({
  children,
  color,
  variant,
  className,
  component,
  onClick,
  ...props
}: ButtonProps<T>) {
  function handleClick(ev: any) {
    if (onClick) onClick(ev)
    rippleEffect(ev)
  }

  return (
    <StyledButton
      color={color || 'primary'}
      component={component || 'button'}
      className={getClassName({ className, variant })}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
