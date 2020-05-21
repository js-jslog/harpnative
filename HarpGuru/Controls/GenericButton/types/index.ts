import type { HarpStrata, PozitionIds, PitchIds } from 'harpstrata'

type PozitionUpdateProps = {
  readonly updateCategory: UpdateCategories.Pozition;
  readonly updateId: PozitionIds;
}
type HarpKeyUpdateProps = {
  readonly updateCategory: UpdateCategories.HarpKey;
  readonly updateId: PitchIds;
}
type GenericAugmentProps = {
  readonly activeHarpStrata: HarpStrata;
}

export enum UpdateCategories {
  Pozition = 'POZITION',
  HarpKey = 'HARP_KEY',
}

export type GenericUpdateProps = ( PozitionUpdateProps & GenericAugmentProps ) | ( HarpKeyUpdateProps & GenericAugmentProps )
