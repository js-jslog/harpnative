import { decrementPropertyReducer } from './index'

test('the reducer returns a decrement of its first param', () => {
  expect(decrementPropertyReducer(1)).toBe(0)
})
