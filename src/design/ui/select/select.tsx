import {
  Children,
  cloneElement,
  FC,
  FocusEvent,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

import Portal from '@/design/api/portal'
import { ColorTheme } from '@/design/types'

import {
  StyledFieldset,
  StyledOverride,
  StyledSelectContainer,
  StyledTextBox,
  StyledOverrideWrapper,
  StyledLabel,
} from './select.style'

type ContentProps = {
  origin: {
    vertical: 'top' | 'bottom'
    horizontal: 'left' | 'right'
  }
}

type InputProps = InputHTMLAttributes<HTMLInputElement>

type SelectedOption = {
  node?: ReactNode
  value?: InputProps['value']
}

type SelectProps = Partial<
  Pick<InputProps, 'id' | 'value' | 'defaultValue' | 'multiple' | 'onFocus' | 'onBlur' | 'onChange'>
> & {
  label?: string
  fullWidth?: boolean
  focusColor?: ColorTheme
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  helperText?: ReactNode
  helperTextColor?: ColorTheme
  ref?: React.MutableRefObject<HTMLInputElement | null>
  children?: ReactNode
  onSelect?: (option: any) => void
}

const DefaultEndAdornment: FC<{ invert: boolean }> = ({ invert }) => {
  return (
    <RiArrowDownSLine
      size={16}
      style={{
        marginLeft: 6,
        transition: '200ms',
        transform: `rotate(${invert ? -180 : 0}deg)`,
      }}
    />
  )
}

const Select: FC<SelectProps> = ({
  ref,
  children,
  label,
  fullWidth,
  focusColor,
  value,
  defaultValue,
  startAdornment,
  endAdornment,
  helperText,
  helperTextColor,
  onSelect,
  onFocus,
  onBlur,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<SelectedOption | null>(null)
  const [showOverride, setShowOverride] = useState(false)

  const fieldsetRef = useRef<HTMLFieldSetElement>(null)
  const overrideRef = useRef<HTMLDivElement>(null)

  const fieldsetRect = fieldsetRef.current?.getBoundingClientRect()

  function insertOptionWhenDefaultValue(optionElement: ReactElement) {
    const { props } = optionElement
    const isDefaultValue = props?.value === value || props?.value === defaultValue

    if (isDefaultValue) {
      setSelectedOption({
        node: props?.children,
        value: props?.value,
      })
    }
  }

  function renderOptions() {
    if (!children) return null

    const options = Children.toArray(children).map(element => {
      const isNotAnReactElement = !element || typeof element === 'string' || typeof element === 'number'

      if (isNotAnReactElement) {
        return element
      }

      insertOptionWhenDefaultValue(element as any)

      return cloneElement(element as any, { onSelect: handleSelect })
    })

    return options
  }

  function openOverride(ev?: any) {
    ev?.stopPropagation()
    setShowOverride(true)
  }

  function closeOverride(ev?: any) {
    ev?.stopPropagation()
    setShowOverride(false)
  }

  function closeWhenClickAway(ev: any) {
    if (overrideRef.current === ev.target) {
      closeOverride(ev)
    }
  }

  function handleFocus(ev: FocusEvent<HTMLInputElement, Element>) {
    if (ev && onFocus) {
      onFocus(ev)
    }

    fieldsetRef.current?.classList.add('focus')
  }

  function handleBlur(ev: FocusEvent<HTMLInputElement, Element>) {
    if (ev && onBlur) {
      onBlur(ev)
    }

    fieldsetRef.current?.classList.remove('focus')
  }

  function handleSelect(option: InputProps['value'], children: ReactNode) {
    if (onSelect) {
      onSelect(option)
    }

    setSelectedOption({ node: children, value: option })
    closeOverride()
  }

  const options = useMemo(renderOptions, [children])

  return (
    <StyledSelectContainer fullWidth={fullWidth} containsLabel={!!label} helperTextColor={helperTextColor || 'warn'}>
      <StyledFieldset ref={fieldsetRef} focusColor={focusColor || 'primary'}>
        {label && <StyledLabel>{label}</StyledLabel>}

        {startAdornment && <div className="start-adornment">{startAdornment}</div>}
        <StyledTextBox tabIndex={0} onClick={openOverride} onFocus={handleFocus} onBlur={handleBlur}>
          {selectedOption?.node}
        </StyledTextBox>
        {endAdornment ? (
          <div className="end-adornment">{endAdornment}</div>
        ) : (
          <DefaultEndAdornment invert={showOverride} />
        )}

        <input
          ref={ref}
          value={selectedOption?.value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          hidden
        />
      </StyledFieldset>

      {showOverride && (
        <Portal passport="select-root">
          <StyledOverride ref={overrideRef} onClick={closeWhenClickAway}>
            <StyledOverrideWrapper
              width={fieldsetRect?.width || 'max-content'}
              position={{
                x: fieldsetRect?.left || 0,
                y: fieldsetRect?.bottom || 0,
              }}
            >
              {!options ? <span>No Content</span> : options}
            </StyledOverrideWrapper>
          </StyledOverride>
        </Portal>
      )}
      {helperText && <div className="helper-text">{helperText}</div>}
    </StyledSelectContainer>
  )
}

export default Select
