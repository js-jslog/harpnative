import type { ViewStyle } from 'react-native'

import type { HarpFaceFragmentProps } from '../../types'

export type Coord = number

export type HarpRowProps = HarpFaceFragmentProps & {
  readonly yCoord: Coord
}

export type HarpRowStyles = {
  readonly row: ViewStyle
}
