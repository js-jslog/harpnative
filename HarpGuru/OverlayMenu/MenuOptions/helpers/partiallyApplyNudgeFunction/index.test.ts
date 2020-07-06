import { partiallyApplyNudgeFunction } from './index'

test('returns a function', () => {
  const returnedFunction = partiallyApplyNudgeFunction()

  expect(returnedFunction).toBeInstanceOf(Function)
})
