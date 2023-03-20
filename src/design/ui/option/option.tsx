import { ReactNode } from 'react'
import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'

import { DynamicProps, TagType } from '@/design/types'
import { ModelComponent } from '@/design/system'

export type OptionProps<T extends TagType> = Omit<DynamicProps<T>, 'color'> & {
  value?: any
  disabled?: boolean
  onSelect?: (value?: any, children?: ReactNode) => void
}

const StyledOption = styled(ModelComponent)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 200ms;
  cursor: pointer;
  border-radius: 0;

  ${({ theme: { palette, spacing } }) => css`
    gap: ${spacing()};
    padding: ${spacing(1.5)};
    background-color: ${palette.background.main};

    &:hover {
      filter: brightness(0.95);
    }
  `}
`

function Option<T extends TagType>({
  children,
  value,
  disabled,
  onSelect,
  onClick,
  component,
  ...props
}: OptionProps<T>) {
  const { palette } = useTheme()

  function handleSelect(ev: any) {
    if (onClick) {
      onClick(ev)
    }

    if (onSelect) {
      onSelect(value, children)
    }
  }

  return (
    <StyledOption
      {...props}
      component={component || 'li'}
      onClick={handleSelect}
      css={css`
        position: relative;
        cursor: default;
        filter: grayscale(1);

        &:hover {
          filter: grayscale(1);
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
          background-color: ${palette.grey[500]}44;
        }
      `}
    >
      {children}
    </StyledOption>
  )
}

export default Option
