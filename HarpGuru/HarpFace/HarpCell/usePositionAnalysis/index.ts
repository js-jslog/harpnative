import { useGlobal } from 'reactn'
import type { Degree, Pitch, Interaction, IsActiveIds } from 'harpstrata'

import { YXCoord } from '../types'

export type PositionFacts = {
  readonly thisDegree: Degree | undefined
  readonly thisPitch: Pitch | undefined
  readonly thisInteraction: Interaction | undefined
  readonly thisIsActive: IsActiveIds | undefined
}

export const usePositionAnalysis = (yxCoord: YXCoord): PositionFacts => {
  const [activeHarpStrata] = useGlobal('activeHarpStrata')
  const {
    degreeMatrix,
    pitchMatrix,
    isActiveComplex: { isActiveMatrix },
  } = activeHarpStrata
  const {
    apparatus: { interactionMatrix },
  } = activeHarpStrata
  const [yCoord, xCoord] = yxCoord
  const {
    [yCoord]: { [xCoord]: thisDegree },
  } = degreeMatrix
  const {
    [yCoord]: { [xCoord]: thisPitch },
  } = pitchMatrix
  const {
    [yCoord]: { [xCoord]: thisInteraction },
  } = interactionMatrix
  const {
    [yCoord]: { [xCoord]: thisIsActive },
  } = isActiveMatrix
  return {
    thisDegree,
    thisPitch,
    thisInteraction,
    thisIsActive,
  }
}
