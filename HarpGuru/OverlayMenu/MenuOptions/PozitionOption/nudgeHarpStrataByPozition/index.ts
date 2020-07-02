import { HarpStrata, getPozitionIds, getCovariantSet, getHarpStrata, PozitionIds } from 'harpstrata'

import {DisplayModes} from '../../../../HarpFace'
import {getPropsForHarpStrata} from '../../../../Controls/ControlHelpers'

const getNextId = (rootId: PozitionIds, direction: 'UP' | 'DOWN'): PozitionIds => {
  if (direction === 'UP') {
    const [ , nextPozitionId ] = getPozitionIds(rootId)
    return nextPozitionId
  }
  const [ previousPozitionId ] = getPozitionIds(rootId).slice(-1)
  return previousPozitionId
}

export const nudgeHarpStrataByPozition = (activeHarpStrata: HarpStrata, direction: 'UP' | 'DOWN', displayMode: DisplayModes): HarpStrata => {
  const { pozitionId, harpKeyId } = activeHarpStrata

  const covariantGroup = getCovariantSet({ pozitionId: getNextId(pozitionId, direction), harpKeyId })

  const nextHarpStrataProps = getPropsForHarpStrata({
    ...activeHarpStrata,
    pozitionId: covariantGroup.pozitionId,
    harpKeyId: covariantGroup.harpKeyId,
  }, displayMode)

  return getHarpStrata(nextHarpStrataProps)
}
