import styled from '@emotion/styled'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-width: 255px;
  padding: 8px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  background-color: #f9f9f9;

  .wysiwyg-editor-content {
    padding: 4px 8px;
    outline: none;
    color: #585858;
  }
`

export const StyledToolBar = styled.footer`
  display: flex;
  gap: 4px;
  align-items: center;
`

export const ButtonBar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 4px;
  border-radius: 4px;
  background-color: transparent;
  color: #535353;
  transition: 200ms;

  :hover {
    background-color: #53535322;
  }
`
