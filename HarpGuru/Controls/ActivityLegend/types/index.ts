import type { HarpStrataControlProps } from '../../types'
import type { DisplayModes } from '../../../HarpFace'

export type ActivityLegendProps = HarpStrataControlProps & {
  readonly setActiveDisplayMode: (displayMode: DisplayModes) => void;
  readonly activeDisplayMode: DisplayModes;
}
