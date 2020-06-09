import type { PitchIds } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'
import type { DisplayModes } from '../../../HarpFace'

export type ActivityLegendProps = HarpStrataControlProps & {
  readonly rootPitchId: PitchIds;
  readonly activeDisplayMode: DisplayModes;
}
