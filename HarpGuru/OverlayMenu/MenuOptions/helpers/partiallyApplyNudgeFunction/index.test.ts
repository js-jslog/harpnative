import { partiallyApplyNudgeFunction } from './index'

test('creates a function which returns a function', () => {
  const returnedFunction = partiallyApplyNudgeFunction()

  expect(returnedFunction).toBeInstanceOf(Function)
})
