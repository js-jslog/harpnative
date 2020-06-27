import { HarpStrata, getCovariantSet, getHarpStrata, getPitchIds } from 'harpstrata'

import {getPropsForHarpStrata} from '../../../Controls/ControlHelpers'

export const incrementHarpStrataByHarpKey = (activeHarpStrata: HarpStrata): HarpStrata => {
  const { rootPitchId, harpKeyId } = activeHarpStrata
  const [ , nextHarpKeyId ] = getPitchIds(harpKeyId)

  const covariantGroup = getCovariantSet({ rootPitchId, harpKeyId: nextHarpKeyId })

  const nextHarpStrataProps = getPropsForHarpStrata({
    ...activeHarpStrata,
    pozitionId: covariantGroup.pozitionId,
    harpKeyId: covariantGroup.harpKeyId
  })

  return getHarpStrata(nextHarpStrataProps)
}
