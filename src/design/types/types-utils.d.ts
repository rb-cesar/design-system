export type InferType<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T

export type Nullable<T> = {
  [K in keyof T]: T[K] | null
}
