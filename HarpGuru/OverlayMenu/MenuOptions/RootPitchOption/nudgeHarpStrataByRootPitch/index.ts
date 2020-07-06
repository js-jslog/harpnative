import { HarpStrata, getCovariantSet, getHarpStrata, getPitchIds, PitchIds } from 'harpstrata'

import {DisplayModes} from '../../../../HarpFace'
import {getPropsForHarpStrata} from '../../../../Controls/ControlHelpers'

const getNextId = (rootId: PitchIds, direction: 'UP' | 'DOWN'): PitchIds => {
  if (direction === 'UP') {
    const [ , nextPitchId ] = getPitchIds(rootId)
    return nextPitchId
  }
  const [ previousRootPitchId ] = getPitchIds(rootId).slice(-1)
  return previousRootPitchId
}

export const nudgeHarpStrataByRootPitch = (activeHarpStrata: HarpStrata, setActiveHarpStrata: (arg0: HarpStrata) => void, direction: 'UP' | 'DOWN', displayMode: DisplayModes): void => {
  const { rootPitchId, harpKeyId } = activeHarpStrata

  const covariantGroup = getCovariantSet({ rootPitchId: getNextId(rootPitchId, direction), harpKeyId })

  const nextHarpStrataProps = getPropsForHarpStrata({
    ...activeHarpStrata,
    pozitionId: covariantGroup.pozitionId,
    harpKeyId: covariantGroup.harpKeyId,
  }, displayMode)

  setActiveHarpStrata(getHarpStrata(nextHarpStrataProps))
}
