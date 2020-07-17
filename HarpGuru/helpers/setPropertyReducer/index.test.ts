import { setPropertyReducer } from './index'

test('the reducer returns the value of its action param', () => {
  expect(setPropertyReducer(0, {value: 1})).toBe(1)
})
