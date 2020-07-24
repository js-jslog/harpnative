import { useGlobal } from 'reactn'
import type { Degree, Pitch, Interaction, IsActiveIds, DegreeIds, PitchIds } from 'harpstrata'

import { YXCoord } from '../types'

export type PositionFacts = {
  readonly thisDegree: Degree | undefined
  readonly thisDegreeId: DegreeIds | undefined
  readonly thisPitch: Pitch | undefined
  readonly thisPitchId: PitchIds | undefined
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
  const { id: thisDegreeId } = thisDegree || { id: undefined }
  const { id: thisPitchId } = thisPitch || { id: undefined }
  return {
    thisDegree,
    thisDegreeId,
    thisPitch,
    thisPitchId,
    thisInteraction,
    thisIsActive,
  }
}
