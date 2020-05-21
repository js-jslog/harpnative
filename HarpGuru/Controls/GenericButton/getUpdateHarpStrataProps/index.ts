import type { HarpStrata, HarpStrataProps, PozitionIds, PitchIds } from 'harpstrata'

import { getPropsForHarpStrata } from '../getPropsForHarpStrata'

type PozitionUpdateProps = {
  readonly updateCategory: 'POZITION';
  readonly updateId: PozitionIds;
}
type HarpKeyUpdateProps = {
  readonly updateCategory: 'HARP_KEY';
  readonly updateId: PitchIds;
}
type GenericAugmentProps = {
  readonly activeHarpStrata: HarpStrata;
}
export type GenericUpdateProps = ( PozitionUpdateProps & GenericAugmentProps ) | ( HarpKeyUpdateProps & GenericAugmentProps )

export const getUpdateHarpStrataProps = (genericUpdateProps: GenericUpdateProps): HarpStrataProps => {
  const { activeHarpStrata, updateCategory, updateId } = genericUpdateProps
  const baseHarpStrataProps = getPropsForHarpStrata(activeHarpStrata)
  if (updateCategory === 'HARP_KEY') {
    const harpKeyId = updateId as PitchIds
    return { ...baseHarpStrataProps, harpKeyId }
  } else {
    const pozitionId = updateId as PozitionIds
    return { ...baseHarpStrataProps, pozitionId }
  }
}
