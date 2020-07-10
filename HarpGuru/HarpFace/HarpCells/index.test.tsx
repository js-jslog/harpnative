import { harpFaceProps } from '../testResources'
import type { HarpRowProps } from '../HarpRow'

import { getHarpCells, getChunkedHarpCells } from './index'

test('getHarpCells returns an array of HarpCells, the length of the row', () => {
  const harpRowProps: HarpRowProps = { ...harpFaceProps, yCoord: 0 }
  const harpCells = getHarpCells(harpRowProps)
  expect(harpCells.length).toBe(10)
})

test('getChunkedHarpCells returns an array of arrays, the flattened length of which is the length of the row', () => {
  const harpRowProps: HarpRowProps = { ...harpFaceProps, yCoord: 0 }
  const chunkedHarpCells = getChunkedHarpCells(harpRowProps)
  expect(chunkedHarpCells.flat().length).toBe(10)
})
