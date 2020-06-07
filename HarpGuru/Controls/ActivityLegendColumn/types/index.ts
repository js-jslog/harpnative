import type { DegreeIds, PitchIds } from 'harpstrata'

export type DegreeActivityLegendColumnProps = {
  readonly originId: DegreeIds;
  readonly activeIds: ReadonlyArray<DegreeIds>;
}

export type PitchActivityLegendColumnProps = {
  readonly originId: PitchIds;
  readonly activeIds: ReadonlyArray<PitchIds>;
}

export type ActivityLegendColumnProps = DegreeActivityLegendColumnProps | PitchActivityLegendColumnProps
