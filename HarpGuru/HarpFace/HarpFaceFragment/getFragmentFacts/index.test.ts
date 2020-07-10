import { harpFaceProps } from '../../testResources'

import { getFragmentFacts } from './index'

test('Recovers the column count from the fragment props', () => {
  const harpFaceFactProps = {
    ...harpFaceProps,
    xRange: [0,1,2,3,4,5,6,7,8,9]
  }
  const harpFaceFacts = getFragmentFacts(harpFaceFactProps)

  const { columnCount } = harpFaceFacts

  expect(columnCount).toBe(10)
})

test('Recovers the column count from a smaller fragment props', () => {
  const harpFaceFactProps = {
    ...harpFaceProps,
    xRange: [4,5,6,7]
  }
  const harpFaceFacts = getFragmentFacts(harpFaceFactProps)

  const { columnCount } = harpFaceFacts

  expect(columnCount).toBe(4)
})
