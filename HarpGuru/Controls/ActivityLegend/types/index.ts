import type { HarpStrataControlProps } from '../../types'
import type { DisplayModes } from '../../../HarpFace'

export type ActivityLegendProps = HarpStrataControlProps & {
  readonly activeDisplayMode: DisplayModes;
}
