import { PitchIds, PozitionIds } from 'harpstrata'

import { UpdateCategories } from '../types'
import type { GenericUpdateProps } from '../types'

export const getActiveIdForUpdateCategory = (props: GenericUpdateProps): PitchIds | PozitionIds => {
  const { activeHarpStrata, updateCategory } = props
  const { pozitionId, harpKeyId } = activeHarpStrata

  if (updateCategory === UpdateCategories.HarpKey) {
    return harpKeyId
  } else {
    return pozitionId
  }
}
