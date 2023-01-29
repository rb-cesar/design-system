import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { ColorTheme } from '@/design/types'

type FieldsetProps = {
  focusColor: ColorTheme
  fullWidth?: boolean
  containsLabel: boolean
}

export const StyledLabel = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: -20px;
    left: 8px;
    color: ${theme.palette.grey[600]};
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  `}
`

export const StyledInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-size: 1rem;
    border: none;
    outline: none;
    color: ${theme.palette.grey[700]};
    border-radius: ${theme.spacing(0.5)};
    background-color: transparent;

    ::placeholder {
      color: ${theme.palette.grey[500]};
    }
  `}
`

export const StyledFieldset = styled.fieldset<FieldsetProps>`
  ${({ theme, containsLabel, focusColor, fullWidth }) => css`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${theme.spacing(0.5)};

    width: max-content;
    padding: ${theme.spacing()};
    color: ${theme.palette.grey[600]};
    border: ${`1px solid ${theme.palette.grey[400]}`};
    border-radius: 4px;
    background-color: ${theme.palette.grey[50]};

    input {
      width: 'max-content';
    }

    ${fullWidth &&
    css`
      width: 100%;

      input {
        width: 100%;
      }
    `}

    ${containsLabel &&
    css`
      margin-top: 20px;
    `}

    &.focus {
      border: ${`1px solid ${theme.palette[focusColor].main}`};
      background-color: ${theme.palette[focusColor].main}08;
    }

    .input-counter {
      position: absolute;
      right: 4px;
      bottom: -1px;
      color: ${theme.palette.grey[600]};
      font-size: 10px;
    }

    .start-adornment,
    .end-adornment {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .start-adornment {
      margin-right: ${theme.spacing(0.5)};
    }

    .end-adornment {
      margin-left: ${theme.spacing(0.5)};
    }
  `}
`
