export const partiallyApplyNudgeFunction = (nudgeFunction: (arg0: Record<string, string>, arg1: 'UP' | 'DOWN') => void, partialParams: Record<string, string>): (arg0: 'UP' | 'DOWN') => void => {
  return (direction: 'UP' | 'DOWN'): void => {
    nudgeFunction(partialParams, direction)
  }
}
