import { DegreeIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

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

test('getChunkedHarpCells returns an array of arrays, with samples having the expected values', () => {
  const harpRowProps: HarpRowProps = { ...harpFaceProps, yCoord: 3 }
  const chunkedHarpCells = getChunkedHarpCells(harpRowProps)
  const { getByText: getByText_1 } = render(chunkedHarpCells[0][0])
  const { getByText: getByText_2 } = render(chunkedHarpCells[0][1])
  const { getByText: getByText_3 } = render(chunkedHarpCells[1][0])
  const { getByText: getByText_4 } = render(chunkedHarpCells[1][1])

  expect(getByText_1(DegreeIds.Second)).toBeTruthy()
  expect(getByText_2(DegreeIds.Fifth)).toBeTruthy()
  expect(getByText_3(DegreeIds.Second)).toBeTruthy()
  expect(getByText_4(DegreeIds.Fourth)).toBeTruthy()
})
