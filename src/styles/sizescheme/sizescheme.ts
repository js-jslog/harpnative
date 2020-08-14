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
    0: seedSize * 0,
    1: seedSize * 1,
    2: seedSize * 1.618,
    3: seedSize * 2.618,
    4: seedSize * 4.236,
    5: seedSize * 6.854,
    6: seedSize * 11.09,
    7: seedSize * 17.944,
    8: seedSize * 29.034,
    9: seedSize * 46.979,
    10: seedSize * 76.013,
    harpFaceColumnWidth: seedSize * columnWidth,
    harpFaceRowHeight: seedSize * columnWidth,
    harpFaceFragmentBoundary: seedSize * fragmentBoundary,
    menuLabelProtrusion: seedSize * labelProtrusion,
  } as const

  return absoluteSizes
}
