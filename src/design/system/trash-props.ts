export function removeTrash<T extends any>(props: T): T {
  const res: any = props

  delete res['ui']
  delete res['variant']
  delete res['color']

  return res as T
}
