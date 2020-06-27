import { HarpStrata, getCovariantSet, getHarpStrata, getPitchIds } from 'harpstrata'

import {DisplayModes} from '../../../HarpFace'
import {getPropsForHarpStrata} from '../../../Controls/ControlHelpers'

export const incrementHarpStrataByHarpKey = (activeHarpStrata: HarpStrata, displayMode: DisplayModes): HarpStrata => {
  const { rootPitchId, harpKeyId } = activeHarpStrata
  const [ , nextHarpKeyId ] = getPitchIds(harpKeyId)

  const covariantGroup = getCovariantSet({ rootPitchId, harpKeyId: nextHarpKeyId })

  const nextHarpStrataProps = getPropsForHarpStrata({
    ...activeHarpStrata,
    pozitionId: covariantGroup.pozitionId,
    harpKeyId: covariantGroup.harpKeyId,
    displayMode
  })

  return getHarpStrata(nextHarpStrataProps)
}
