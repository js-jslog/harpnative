import { HarpStrata, getCovariantSet, getHarpStrata, getPitchIds } from 'harpstrata'

import {getPropsForHarpStrata} from '../../../Controls/ControlHelpers'

export const incrementHarpStrataByRootPitch = (activeHarpStrata: HarpStrata): HarpStrata => {
  const { rootPitchId, harpKeyId } = activeHarpStrata
  const [ , nextRootPitchId ] = getPitchIds(rootPitchId)

  const covariantGroup = getCovariantSet({ rootPitchId: nextRootPitchId, harpKeyId })

  const nextHarpStrataProps = getPropsForHarpStrata({
    ...activeHarpStrata,
    pozitionId: covariantGroup.pozitionId,
    harpKeyId: covariantGroup.harpKeyId
  })

  return getHarpStrata(nextHarpStrataProps)
}
