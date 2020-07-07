export const partiallyApplyNudgeFunction = <K>(
  nudgeFunction: (arg0: K, arg1: 'UP' | 'DOWN') => void,
  partialParams: K
): (arg0: 'UP' | 'DOWN') => void => {
  return (direction: 'UP' | 'DOWN'): void => {
    nudgeFunction(partialParams, direction)
  }
}
