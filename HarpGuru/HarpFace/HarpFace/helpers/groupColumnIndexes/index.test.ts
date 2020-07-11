import { groupColumnIndexes } from './index'

test('creates octave range indexes for a simple HasRootArray', () => {
  const hasRootArray = [ true, false, false, true, false, false ]
  const expectedRangeIndexes = [ [0, 1, 2], [3, 4, 5]]

  const actualRangeIndexes = groupColumnIndexes(hasRootArray)

  expect(actualRangeIndexes).toStrictEqual(expectedRangeIndexes)
})
