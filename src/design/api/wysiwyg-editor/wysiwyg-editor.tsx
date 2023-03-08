import { FC, useRef } from 'react'
import { MdFormatBold, MdFormatUnderlined, MdFormatItalic } from 'react-icons/md'

import { ButtonBar, StyledContainer, StyledToolBar } from './wysiwyg-editor.style'

type WysiwygEditorProps = {
  defaultValue?: string
  value?: string
}

const WysiwygEditor: FC<WysiwygEditorProps> = ({ value, defaultValue }) => {
  const contentRef = useRef<HTMLParagraphElement | null>(null)

  return (
    <StyledContainer>
      <p ref={contentRef} className="wysiwyg-editor-content" contentEditable>
        {value || defaultValue}
      </p>
      <StyledToolBar>
        <ButtonBar>
          <MdFormatBold size={20} />
        </ButtonBar>
        <ButtonBar>
          <MdFormatUnderlined size={20} />
        </ButtonBar>
        <ButtonBar>
          <MdFormatItalic size={20} />
        </ButtonBar>
      </StyledToolBar>
    </StyledContainer>
  )
}

export default WysiwygEditor
