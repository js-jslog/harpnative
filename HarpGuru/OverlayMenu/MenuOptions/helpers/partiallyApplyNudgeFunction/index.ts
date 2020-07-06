export const partiallyApplyNudgeFunction = (nudgeFunction: Function, partialParams: Object): (arg0: 'UP' | 'DOWN') => void => {
  return (direction: 'UP' | 'DOWN'): void => {
    nudgeFunction(partialParams, direction)
  }
}
