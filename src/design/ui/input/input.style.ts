import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { ColorTheme } from '@/design/types'

type StyledInputContainerProps = {
  focusColor: ColorTheme
  fullWidth?: boolean
  containsLabel?: boolean
  helperTextColor: ColorTheme
}

export const StyledInputContainer = styled.div<Omit<StyledInputContainerProps, 'focusColor'>>`
  ${({ theme: { palette, spacing }, containsLabel, fullWidth, helperTextColor }) => css`
    .helper-text {
      color: ${palette[helperTextColor].main};
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
      font-size: 0.9rem;
      margin-left: 8px;
    }

    input {
      width: 'max-content';
    }

    ${fullWidth &&
    css`
      width: 100%;

      fieldset,
      input {
        width: 100%;
      }
    `}

    ${containsLabel &&
    css`
      margin-top: 20px;
    `}

    .input-counter {
      position: absolute;
      right: 4px;
      bottom: -1px;
      color: ${palette.grey[600]};
      font-size: 10px;
    }

    .start-adornment,
    .end-adornment {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .start-adornment {
      margin-right: ${spacing(0.5)};
    }

    .end-adornment {
      margin-left: ${spacing(0.5)};
    }
  `}
`

export const StyledFieldset = styled.fieldset<Omit<StyledInputContainerProps, 'fullWidth' | 'helperTextColor'>>`
  ${({ theme: { palette, spacing }, focusColor }) => css`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${spacing(0.5)};

    width: 280px;
    height: 42px;
    padding: ${spacing()};
    color: ${palette.grey[600]};
    border: ${`1px solid ${palette.grey[400]}`};
    border-radius: 4px;
    background-color: ${palette.grey[50]};

    &:hover {
      outline-style: solid;
      outline-width: 1px;
      outline-color: ${palette.grey[200]};
    }

    &.focus {
      outline-style: solid;
      outline-width: 1px;
      outline-color: ${palette[focusColor].main};
      background-color: ${palette[focusColor].main}08;
    }

    .input-counter {
      position: absolute;
      right: 4px;
      bottom: -1px;
      color: ${palette.grey[600]};
      font-size: 10px;
    }
  `}
`

export const StyledLabel = styled.label`
  ${({ theme: { palette } }) => css`
    position: absolute;
    top: -20px;
    left: 8px;
    color: ${palette.grey[600]};
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  `}
`

export const StyledInput = styled.input`
  ${({ theme: { palette, spacing } }) => css`
    width: 100%;
    font-size: 1rem;
    border: none;
    outline: none;
    padding: ${spacing(0.5)};
    color: ${palette.grey[700]};
    border-radius: ${spacing(0.5)};
    background-color: transparent;

    &::placeholder {
      color: ${palette.grey[500]};
    }
  `}
`
