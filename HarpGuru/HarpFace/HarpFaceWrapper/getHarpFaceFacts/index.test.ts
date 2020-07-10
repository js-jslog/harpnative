import { harpFaceProps } from '../../testResources'

import { getHarpFaceFacts } from './index'

test('Recovers the column and row count from the HarpFaceProps', () => {
  const harpFaceFacts = getHarpFaceFacts(harpFaceProps)

  const { columnCount, rowCount } = harpFaceFacts

  expect(columnCount).toBe(10)
  expect(rowCount).toBe(7)
})

test('Identifies the boundary indexes in a naive way', () => {
  const { boundaryIndexes } = getHarpFaceFacts(harpFaceProps)

  expect(boundaryIndexes).toStrictEqual([2, 5, 8])
})
