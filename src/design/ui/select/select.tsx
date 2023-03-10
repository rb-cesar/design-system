import { useEffect, useRef } from 'react'
import { css } from '@emotion/react'
import Portal from '@/design/api/portal'

type SelectProps = Partial<
  Pick<HTMLInputElement, 'id' | 'value' | 'defaultValue' | 'dataset' | 'multiple'>
> & {
  ref?: React.MutableRefObject<HTMLInputElement | null>
}

const Select: React.FC<SelectProps> = ({ ref, value, defaultValue }) => {
  const fieldsetRef = useRef<HTMLFieldSetElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  function handleResize() {
    if (!(fieldsetRef.current && cardRef.current)) return

    const fieldsetRect = fieldsetRef.current.getBoundingClientRect()
    const margin = 16

    cardRef.current.style.top = fieldsetRect.top + margin + 'px'
    cardRef.current.style.left = fieldsetRect.left + 'px'
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('load', handleResize)
      window.removeEventListener('resize', handleResize)
    }
  }, [fieldsetRef, cardRef])

  return (
    <div>
      <fieldset ref={fieldsetRef}>
        <input ref={ref} value={value} defaultValue={defaultValue} hidden />
      </fieldset>
      <Portal passport="select-root">
        <div
          css={css`
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
          `}
        >
          <div
            ref={cardRef}
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              transform: translate(-50%, -50%);
              padding: 8px;
              border-radius: 4px;
              color: #fff;
              background-color: #42d;
            `}
          >
            <h2>OK</h2>
          </div>
        </div>
      </Portal>
    </div>
  )
}

export default Select
