import type { HarpStrata, PozitionIds, PitchIds } from 'harpstrata'

type CommonGenericUpdateProps = {
  readonly activeHarpStrata: HarpStrata;
  readonly setActiveHarpStrata: (harpStrata: HarpStrata) => void;
}
type PozitionUpdateProps = CommonGenericUpdateProps & {
  readonly updateCategory: UpdateCategories.Pozition;
  readonly updateId: PozitionIds;
}
type HarpKeyUpdateProps = CommonGenericUpdateProps & {
  readonly updateCategory: UpdateCategories.HarpKey;
  readonly updateId: PitchIds;
}

export enum UpdateCategories {
  Pozition = 'POZITION',
  HarpKey = 'HARP_KEY',
}

export type GenericUpdateProps = PozitionUpdateProps | HarpKeyUpdateProps
