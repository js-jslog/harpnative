type Action<T> = {
  readonly value: T
}

export const setPropertyReducer = <T>(_property: T, action: Action<T>): T =>
  action.value
