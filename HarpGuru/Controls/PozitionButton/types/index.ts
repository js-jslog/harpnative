import type { HarpStrata, PozitionIds } from 'harpstrata'

export type PozitionButtonProps = {
  readonly id: PozitionIds;
  readonly activeHarpStrata: HarpStrata;
  readonly setActiveHarpStrata: (harpStrata: HarpStrata) => void;
}
