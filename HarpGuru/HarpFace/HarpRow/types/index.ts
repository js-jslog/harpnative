import type { ViewStyle } from 'react-native'
import type { HarpStrata } from 'harpstrata'

import type { HarpCellProps, Coord } from '../../HarpCell'
import type { SetActiveHarpStrata } from '../../../types'

export type HarpRowProps = Pick<
  HarpCellProps,
  | 'activeDisplayMode'
> & {
  readonly activeHarpStrata: HarpStrata
  readonly setActiveHarpStrata: SetActiveHarpStrata
  readonly yCoord: Coord
  readonly xRange: ReadonlyArray<number>
}

export type HarpRowStyles = {
  readonly row: ViewStyle
}
