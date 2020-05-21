import type { HarpStrata, HarpStrataProps, PozitionIds } from 'harpstrata'

import { getPropsForHarpStrata } from '../getPropsForHarpStrata'

type PozitionUpdateProps = {
  readonly updateCategory: 'POZITION';
  readonly updateId: PozitionIds;
}
type GenericUpdateProps = PozitionUpdateProps & {
  readonly activeHarpStrata: HarpStrata;
}

export const getUpdateHarpStrataProps = (genericUpdateProps: GenericUpdateProps): HarpStrataProps => {
  const { activeHarpStrata, updateId } = genericUpdateProps
  const baseHarpStrataProps = getPropsForHarpStrata(activeHarpStrata)

  const specialisedHarpStrataProps = { ...baseHarpStrataProps, pozitionId: updateId }

  return specialisedHarpStrataProps
}
