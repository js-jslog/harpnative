import type { ViewStyle } from 'react-native'

import type { HarpCellProps } from '../../HarpCell'

export type Coord = number

export type HarpRowProps = Pick<HarpCellProps, 'activeHarpStrata' | 'setActiveHarpStrata' | 'activeDisplayMode' | 'activeDisplayMode'> & {
  readonly yCoord: Coord
  readonly xRange: ReadonlyArray<number>
}

export type HarpRowStyles = {
  readonly row: ViewStyle
}
