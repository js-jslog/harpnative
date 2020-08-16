import { Dimensions } from 'react-native'

import { SizeScheme } from '../styles-types'

const relativeSizes: Omit<
  SizeScheme,
  | 'harpFaceColumnWidth'
  | 'harpFaceRowHeight'
  | 'harpFaceFragmentBoundary'
  | 'menuLabelProtrusion'
> = {
  0: 0,
  1: 1,
  2: 1.618,
  3: 2.618,
  4: 4.236,
  5: 6.854,
  6: 11.09,
  7: 17.944,
  8: 29.034,
  9: 46.979,
  10: 76.013,
} as const

const relativeColumnWidth = 9
const relativeFragmentBoundary = 7
const relativeLabelProtrusion = 10

export const getSizes = (): SizeScheme => {
  const { width: orientationWidth, height: orientationHeight } = Dimensions.get('window')
  const width = orientationWidth > orientationHeight ? orientationWidth : orientationHeight
  const height = orientationHeight < orientationWidth ? orientationHeight : orientationWidth

  const {
    [relativeColumnWidth]: columnWidth,
    [relativeFragmentBoundary]: fragmentBoundary,
    [relativeLabelProtrusion]: labelProtrusion,
  } = relativeSizes
  const rowHeight = columnWidth
  const labelGrace = fragmentBoundary
  const widthRequirements =
    width /
    (columnWidth * 10 +
      fragmentBoundary * 3 +
      labelProtrusion * 2 +
      labelGrace * 2)
  const heightRequirements = height / (rowHeight * 7)

  const seedSize =
    widthRequirements > heightRequirements
      ? heightRequirements
      : widthRequirements

  const absoluteSizes: SizeScheme = {
    0: seedSize * relativeSizes[0],
    1: seedSize * relativeSizes[1],
    2: seedSize * relativeSizes[2],
    3: seedSize * relativeSizes[3],
    4: seedSize * relativeSizes[4],
    5: seedSize * relativeSizes[5],
    6: seedSize * relativeSizes[6],
    7: seedSize * relativeSizes[7],
    8: seedSize * relativeSizes[8],
    9: seedSize * relativeSizes[9],
    10: seedSize * relativeSizes[10],
    harpFaceColumnWidth: seedSize * columnWidth,
    harpFaceRowHeight: seedSize * columnWidth,
    harpFaceFragmentBoundary: seedSize * fragmentBoundary,
    menuLabelProtrusion: seedSize * labelProtrusion,
  } as const

  return absoluteSizes
}
