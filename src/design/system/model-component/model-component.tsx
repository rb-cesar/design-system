import { forwardRef } from 'react'

import { tags } from '@/design/system'
import { DynamicProps, TagType } from '@/design/types'

function ModelComponent<T extends TagType>(props: DynamicProps<T>, ref: any) {
  const { component, children, ...rest } = props as any
  const TagName = component

  if (!TagName || !tags.includes(TagName)) {
    return (
      <div {...rest} ref={ref}>
        {children}
      </div>
    )
  }

  return (
    <TagName {...rest} ref={ref}>
      {children}
    </TagName>
  )
}

export default forwardRef(ModelComponent) as typeof ModelComponent
