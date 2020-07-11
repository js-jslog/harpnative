import { groupColumnIndexes } from './index'

test('groups column indexes for a simple HasRootArray', () => {
  const hasRootArray = [ true, false, false, true, false, false ]
  const expectedRangeIndexes = [ [0, 1, 2], [3, 4, 5]]

  const actualRangeIndexes = groupColumnIndexes(hasRootArray)

  expect(actualRangeIndexes).toStrictEqual(expectedRangeIndexes)
})

test('groups column indexes for a simple HasRootArray which doesnt start with a root column', () => {
  const hasRootArray = [ false, true, false, true, false, false ]
  const expectedRangeIndexes = [ [0], [1, 2], [3, 4, 5]]

  const actualRangeIndexes = groupColumnIndexes(hasRootArray)

  expect(actualRangeIndexes).toStrictEqual(expectedRangeIndexes)
})
