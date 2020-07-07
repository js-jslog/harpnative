import { HarpStrata, getHarpStrata, getApparatusIds } from 'harpstrata'
import type { ApparatusIds } from 'harpstrata'

import {DisplayModes} from '../../../../HarpFace'
import {getPropsForHarpStrata} from '../../../../Controls/ControlHelpers'

const getNextId = (apparatusId: ApparatusIds, direction: 'UP' | 'DOWN'): ApparatusIds => {
  const apparatusIdList = getApparatusIds()
  const apparatusIdIndex = apparatusIdList.indexOf(apparatusId)

  if (direction === 'UP') {
    const [ , nextApparatusId ] = [ ...apparatusIdList.slice(apparatusIdIndex), ...apparatusIdList.slice(0, apparatusIdIndex)]
    return nextApparatusId
  }
  const [ previousApparatusId ] = [ ...apparatusIdList.slice(apparatusIdIndex), ...apparatusIdList.slice(0, apparatusIdIndex)].reverse()
  return previousApparatusId
}

type PartialParams = {
  readonly activeHarpStrata: HarpStrata
  readonly setActiveHarpStrata: (arg0: HarpStrata) => void
}

export const nudgeHarpStrataByApparatus = (partialParams: PartialParams, direction: 'UP' | 'DOWN'): void => {
  const { activeHarpStrata, setActiveHarpStrata } = partialParams
  const { apparatus: { id: apparatusId }} = activeHarpStrata

  const nextHarpStrataProps = getPropsForHarpStrata({
    ...activeHarpStrata,
    apparatus: { ...activeHarpStrata.apparatus, id: getNextId(apparatusId, direction) }
  }, DisplayModes.Degree)

  setActiveHarpStrata(getHarpStrata(nextHarpStrataProps))
}
