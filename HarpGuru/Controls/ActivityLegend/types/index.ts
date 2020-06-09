import type { DegreeIds, PitchIds } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'

export type ActivityLegendProps = HarpStrataControlProps & {
  readonly rootPitchId: PitchIds;
  readonly activeDegreeIds: ReadonlyArray<DegreeIds>;
  readonly activePitchIds: ReadonlyArray<PitchIds>;
}
