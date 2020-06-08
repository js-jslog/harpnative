import type { DegreeIds, PitchIds } from 'harpstrata'

export type ActivityLegendProps = {
  readonly rootPitchId: PitchIds;
  readonly activeDegreeIds: ReadonlyArray<DegreeIds>;
  readonly activePitchIds: ReadonlyArray<PitchIds>;
}
