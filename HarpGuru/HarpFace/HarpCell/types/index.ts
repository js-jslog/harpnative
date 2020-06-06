import type { HarpFaceProps } from '../../types'
import type { Coord } from '../../HarpRow'

export type YXCoord = [Coord, Coord]

export type HarpCellProps = HarpFaceProps & {
  readonly yxCoord: YXCoord;
};
