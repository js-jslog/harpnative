import { setPropertyReducer } from './index'

test('the reducer returns the value of its action param when number', () => {
  expect(setPropertyReducer(0, {value: 1})).toBe(1)
})

test('the reducer returns the value of its action param when string', () => {
  expect(setPropertyReducer('pretest', {value: 'posttest'})).toBe('posttest')
})
