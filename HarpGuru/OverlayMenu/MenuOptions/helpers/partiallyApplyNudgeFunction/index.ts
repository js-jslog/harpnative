export const partiallyApplyNudgeFunction = (nudgeFunction: (arg0: Object, arg1: 'UP' | 'DOWN') => void, partialParams: Object): (arg0: 'UP' | 'DOWN') => void => {
  return (direction: 'UP' | 'DOWN'): void => {
    nudgeFunction(partialParams, direction)
  }
}
