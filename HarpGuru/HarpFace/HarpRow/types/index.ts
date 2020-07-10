import type { ViewStyle } from 'react-native'

import type { HarpCellProps } from '../../HarpCell'

// TODO: this should probably be defined in HarpCell
// since that's the lowest level at which we use Coords.
export type Coord = number

export type HarpRowProps = Omit<HarpCellProps, 'yxCoord'> & {
  readonly yCoord: Coord
  readonly xRange: ReadonlyArray<number>
}

export type HarpRowStyles = {
  readonly row: ViewStyle
}
