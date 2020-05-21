import type { HarpStrata, PozitionIds, PitchIds } from 'harpstrata'

type CommonGenericUpdateProps = {
  readonly activeHarpStrata: HarpStrata;
  readonly setActiveHarpStrata: (harpStrata: HarpStrata) => void;
}

export type PozitionUpdateProps = CommonGenericUpdateProps & {
  readonly updateCategory: UpdateCategories.Pozition;
  readonly updateId: PozitionIds;
}
export type HarpKeyUpdateProps = CommonGenericUpdateProps & {
  readonly updateCategory: UpdateCategories.HarpKey;
  readonly updateId: PitchIds;
}

export type GenericUpdateProps = PozitionUpdateProps | HarpKeyUpdateProps

export enum UpdateCategories {
  Pozition = 'POZITION',
  HarpKey = 'HARP_KEY',
}
