export const partiallyApplyNudgeFunction = <K extends string, T>(
  nudgeFunction: (arg0: Record<K, T>, arg1: 'UP' | 'DOWN') => void,
  partialParams: Record<K, T>
): (arg0: 'UP' | 'DOWN') => void => {
  return (direction: 'UP' | 'DOWN'): void => {
    nudgeFunction(partialParams, direction)
  }
}
