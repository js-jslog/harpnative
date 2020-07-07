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

type PartialParams = {
  readonly activeHarpStrata: HarpStrata
  readonly setActiveHarpStrata: (arg0: HarpStrata) => void
  readonly activeDisplayMode: DisplayModes
}

export const nudgeHarpStrataByPozition = (partialParams: PartialParams, direction: 'UP' | 'DOWN'): void => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = partialParams
  const { pozitionId, harpKeyId } = activeHarpStrata

  const covariantGroup = getCovariantSet({ pozitionId: getNextId(pozitionId, direction), harpKeyId })

  const nextHarpStrataProps = getPropsForHarpStrata({
    ...activeHarpStrata,
    pozitionId: covariantGroup.pozitionId,
    harpKeyId: covariantGroup.harpKeyId,
  }, activeDisplayMode)

  setActiveHarpStrata(getHarpStrata(nextHarpStrataProps))
}
