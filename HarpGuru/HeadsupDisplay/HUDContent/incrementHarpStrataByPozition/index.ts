import { HarpStrata, getPozitionIds, getCovariantSet, getHarpStrata } from 'harpstrata'

import {getPropsForHarpStrata} from '../../../Controls/ControlHelpers'

export const incrementHarpStrataByPozition = (activeHarpStrata: HarpStrata): HarpStrata => {
  const { pozitionId, harpKeyId } = activeHarpStrata
  const [ , nextPozitionId ] = getPozitionIds(pozitionId)

  const covariantGroup = getCovariantSet({ pozitionId: nextPozitionId, harpKeyId })

  const nextHarpStrataProps = getPropsForHarpStrata({
    ...activeHarpStrata,
    pozitionId: covariantGroup.pozitionId,
    harpKeyId: covariantGroup.harpKeyId
  })

  return getHarpStrata(nextHarpStrataProps)
}
