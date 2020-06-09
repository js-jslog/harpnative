import type { DegreeIds, PitchIds } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'

export type DegreeActivityLegendColumnProps = HarpStrataControlProps & {
  readonly originId: DegreeIds;
  readonly activeIds: ReadonlyArray<DegreeIds>;
}

export type PitchActivityLegendColumnProps = HarpStrataControlProps & {
  readonly originId: PitchIds;
  readonly activeIds: ReadonlyArray<PitchIds>;
}

export type ActivityLegendColumnProps = DegreeActivityLegendColumnProps | PitchActivityLegendColumnProps
