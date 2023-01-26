export type TagType = keyof JSX.IntrinsicElements

export type DynamicProps<T extends TagType> = JSX.IntrinsicElements[T] & {
  component?: T
}
