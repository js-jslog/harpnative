import { harpFaceProps } from '../testResources'
import type { HarpRowProps } from '../HarpRow'

import { getHarpCells } from './index'

test('getHarpCells returns an array of HarpCells, the length of the range supplied', () => {
  const harpRowProps: HarpRowProps = { ...harpFaceProps, yCoord: 0, xRange: [0,1,2] }
  const harpCells = getHarpCells(harpRowProps)
  expect(harpCells.length).toBe(3)
})
