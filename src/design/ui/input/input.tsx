import {
  ChangeEvent,
  FC,
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  useLayoutEffect,
  useRef,
} from 'react'

import { ColorTheme } from '@/design/types'

import { StyledInputContainer, StyledFieldset, StyledInput, StyledLabel } from './input.style'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  counter?: boolean
  fullWidth?: boolean
  focusColor?: ColorTheme
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  helperText?: ReactNode
  helperTextColor?: ColorTheme
}

const Input: FC<InputProps> = ({
  label,
  counter,
  fullWidth,
  focusColor,
  value,
  defaultValue,
  maxLength,
  startAdornment,
  endAdornment,
  helperText,
  helperTextColor,
  onFocus,
  onBlur,
  onChange,
  ...props
}) => {
  const counterRef = useRef<HTMLSpanElement | null>(null)

  function handleFocus(ev: FocusEvent<HTMLInputElement, Element>) {
    if (onFocus) onFocus(ev)

    const fieldset = ev.currentTarget.parentElement
    fieldset?.classList.add('focus')
  }

  function handleBlur(ev: FocusEvent<HTMLInputElement, Element>) {
    if (onBlur) onBlur(ev)

    const fieldset = ev.currentTarget.parentElement
    fieldset?.classList.remove('focus')
  }

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    if (onChange) onChange(ev)

    if (counter && counterRef.current) {
      const counterEl = counterRef.current
      const inputEl = ev.currentTarget
      const counterContent = `${inputEl.value.length}/${inputEl.maxLength || 0}`

      counterEl.textContent = counterContent
    }
  }

  useLayoutEffect(() => {
    if (counter && counterRef.current) {
      counterRef.current.textContent = `${value || defaultValue || 0}/${maxLength}`
    }
  }, [counter, counterRef])

  return (
    <StyledInputContainer fullWidth={fullWidth} helperTextColor={helperTextColor || 'warn'}>
      <StyledFieldset containsLabel={!!label} focusColor={focusColor || 'primary'}>
        {startAdornment && <div className="start-adornment">{startAdornment}</div>}
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledInput
          {...props}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {counter && (
          <span ref={counterRef} className="input-counter">
            0/0
          </span>
        )}
        {endAdornment && <div className="end-adornment">{endAdornment}</div>}
      </StyledFieldset>
      {helperText && <div className="helper-text">{helperText}</div>}
    </StyledInputContainer>
  )
}

export default Input
