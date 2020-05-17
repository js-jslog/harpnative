import type { HarpStrata, PitchIds } from 'harpstrata'

export type PitchButtonProps = {
  readonly id: PitchIds;
  readonly activeHarpStrata: HarpStrata;
  readonly setActiveHarpStrata: (harpStrata: HarpStrata) => void;
}
