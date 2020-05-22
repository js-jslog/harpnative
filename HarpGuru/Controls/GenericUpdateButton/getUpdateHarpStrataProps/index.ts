import type { HarpStrataProps, PozitionIds, PitchIds } from 'harpstrata'

import { UpdateCategories } from '../types'
import type { GenericUpdateProps } from '../types'
import { getPropsForHarpStrata } from '../getPropsForHarpStrata'

export const getUpdateHarpStrataProps = (genericUpdateProps: GenericUpdateProps): HarpStrataProps => {
  const { activeHarpStrata, updateCategory, id } = genericUpdateProps
  const baseHarpStrataProps = getPropsForHarpStrata(activeHarpStrata)
  if (updateCategory === UpdateCategories.HarpKey) {
    const harpKeyId = id as PitchIds
    return { ...baseHarpStrataProps, harpKeyId }
  } else {
    const pozitionId = id as PozitionIds
    return { ...baseHarpStrataProps, pozitionId }
  }
}
