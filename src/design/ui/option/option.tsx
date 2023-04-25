import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { DynamicProps, TagType } from '@/design/types'
import { ModelComponent } from '@/design/system'

export type OptionProps<T extends TagType> = Omit<DynamicProps<T>, 'color' | 'onSelect'> & {
  value?: any
  disabled?: boolean
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
  // @ts-ignore
  onSelect,
  onClick,
  component,
  ...props
}: OptionProps<T>) {
  function handleSelect(ev: any) {
    if (onClick) {
      onClick(ev)
    }

    if (onSelect) {
      onSelect(value, children)
    }
  }

  return (
    <StyledOption {...props} component={component || 'li'} onClick={handleSelect}>
      {children}
    </StyledOption>
  )
}

export default Option
