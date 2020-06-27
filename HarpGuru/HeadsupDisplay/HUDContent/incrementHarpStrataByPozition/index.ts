import { HarpStrata, getPozitionIds, getCovariantSet, getHarpStrata } from 'harpstrata'

import {DisplayModes} from '../../../HarpFace'
import {getPropsForHarpStrata} from '../../../Controls/ControlHelpers'

export const incrementHarpStrataByPozition = (activeHarpStrata: HarpStrata, displayMode: DisplayModes): HarpStrata => {
  const { pozitionId, harpKeyId } = activeHarpStrata
  const [ , nextPozitionId ] = getPozitionIds(pozitionId)

  const covariantGroup = getCovariantSet({ pozitionId: nextPozitionId, harpKeyId })

  const nextHarpStrataProps = getPropsForHarpStrata({
    ...activeHarpStrata,
    pozitionId: covariantGroup.pozitionId,
    harpKeyId: covariantGroup.harpKeyId,
  }, displayMode)

  return getHarpStrata(nextHarpStrataProps)
}
