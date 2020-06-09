import type { DegreeIds, PitchIds } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'
import type { DisplayModes } from '../../../HarpFace'

export type DegreeActivityLegendColumnProps = HarpStrataControlProps & {
  readonly originId: DegreeIds;
  readonly activeIds: ReadonlyArray<DegreeIds>;
  readonly activeDisplayMode: DisplayModes;
}

export type PitchActivityLegendColumnProps = HarpStrataControlProps & {
  readonly originId: PitchIds;
  readonly activeIds: ReadonlyArray<PitchIds>;
  readonly activeDisplayMode: DisplayModes;
}

export type ActivityLegendColumnProps = DegreeActivityLegendColumnProps | PitchActivityLegendColumnProps
