import { HarpStrata, getHarpStrata, getApparatusIds, ApparatusIds } from 'harpstrata'

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

export const nudgeHarpStrataByApparatus = (activeHarpStrata: HarpStrata, setActiveHarpStrata: (arg0: HarpStrata) => void, direction: 'UP' | 'DOWN'): void => {
  const { apparatus: { id: apparatusId }} = activeHarpStrata

  const nextHarpStrataProps = getPropsForHarpStrata({
    ...activeHarpStrata,
    apparatus: { ...activeHarpStrata.apparatus, id: getNextId(apparatusId, direction) }
  }, DisplayModes.Degree)

  setActiveHarpStrata(getHarpStrata(nextHarpStrataProps))
}
