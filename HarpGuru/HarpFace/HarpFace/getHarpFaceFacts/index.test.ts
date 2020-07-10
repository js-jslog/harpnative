import { harpFaceProps } from '../../testResources'

import { getHarpFaceFacts } from './index'

test('Recovers the column and row count from the fragment props', () => {
  const harpFaceFactProps = {
    ...harpFaceProps,
    xRange: [0,1,2,3,4,5,6,7,8,9]
  }
  const harpFaceFacts = getHarpFaceFacts(harpFaceFactProps)

  const { columnCount, rowCount } = harpFaceFacts

  expect(columnCount).toBe(10)
  expect(rowCount).toBe(7)
})

test('Recovers the column and row count from a smaller fragment props', () => {
  const harpFaceFactProps = {
    ...harpFaceProps,
    xRange: [4,5,6,7]
  }
  const harpFaceFacts = getHarpFaceFacts(harpFaceFactProps)

  const { columnCount, rowCount } = harpFaceFacts

  expect(columnCount).toBe(4)
  expect(rowCount).toBe(7)
})
