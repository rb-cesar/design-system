import { FieldsetHTMLAttributes, ReactNode, useRef, useState } from 'react'
import Portal from '@/design/api/portal'
import { ColorTheme } from '@/design/types'

import {
  StyledFieldset,
  StyledOverride,
  StyledSelectContainer,
  StyledTextBox,
  StyledOverrideWrapper,
} from './select.style'

type ContentProps = {
  origin: {
    vertical: 'top' | 'bottom'
    horizontal: 'left' | 'right'
  }
}

type SelectProps = Partial<Pick<HTMLInputElement, 'id' | 'value' | 'defaultValue' | 'dataset' | 'multiple'>> & {
  label?: string
  counter?: boolean
  fullWidth?: boolean
  focusColor?: ColorTheme
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  helperText?: ReactNode
  helperTextColor?: ColorTheme
  ref?: React.MutableRefObject<HTMLInputElement | null>
  children?: ReactNode
}

const Select: React.FC<SelectProps> = ({
  ref,
  children,
  label,
  counter,
  fullWidth,
  focusColor,
  value,
  defaultValue,
  // maxLength,
  startAdornment,
  endAdornment,
  helperText,
  helperTextColor,
  // onFocus,
  // onBlur,
  // onChange,
}) => {
  const fieldsetRef = useRef<HTMLFieldSetElement>(null)
  const overrideRef = useRef<HTMLDivElement>(null)

  const [selectValue, setSelectValue] = useState(value || defaultValue)
  const [showOverride, setShowOverride] = useState(false)

  const fieldsetRect = fieldsetRef.current?.getBoundingClientRect()

  function handleOpenOverride(ev: any) {
    ev?.stopPropagation()
    setShowOverride(true)
  }

  function handleCloseOverride(ev: any) {
    ev?.stopPropagation()

    if (overrideRef.current === ev.target) {
      setShowOverride(false)
    }
  }

  function handleSelect() {}

  return (
    <StyledSelectContainer helperTextColor={helperTextColor || 'warn'}>
      <StyledFieldset ref={fieldsetRef} focusColor={focusColor || 'primary'}>
        <StyledTextBox onClick={handleOpenOverride}>{selectValue}</StyledTextBox>
        <input ref={ref} value={selectValue} defaultValue={defaultValue} hidden />
      </StyledFieldset>
      {showOverride && (
        <Portal passport="select-root">
          <StyledOverride ref={overrideRef} onClick={handleCloseOverride}>
            <StyledOverrideWrapper
              width={fieldsetRect?.width || 'max-content'}
              position={{
                x: fieldsetRect?.left || 0,
                y: fieldsetRect?.bottom || 0,
              }}
              origin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              {children || <span>No Content</span>}
            </StyledOverrideWrapper>
          </StyledOverride>
        </Portal>
      )}
    </StyledSelectContainer>
  )
}

export default Select
