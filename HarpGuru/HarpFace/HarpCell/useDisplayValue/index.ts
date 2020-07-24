import { useGlobal } from 'reactn'

import type { YXCoord } from '../types'
import {analysePosition} from '../analysePosition'
import {DisplayModes} from '../../../types'

type DisplayValueTuple =
  | [string, string]
  | [string, undefined]
  | [undefined, undefined]

export const useDisplayValue = (yxCoord: YXCoord): DisplayValueTuple => {
  const [activeHarpStrata] = useGlobal('activeHarpStrata')
  const [activeDisplayMode] = useGlobal('activeDisplayMode')

  const analysePositionProps = {
    yxCoord, activeHarpStrata, activeDisplayMode
  }
  const positionFacts = analysePosition(analysePositionProps)
  const { thisDegree, thisPitch } = positionFacts
  const { id: degreeId } = thisDegree || { id: undefined }
  const { id: pitchId } = thisPitch || { id: undefined }

  if (degreeId === undefined || pitchId === undefined)
    return [undefined, undefined]

  const [note, ...modifiers] =
    activeDisplayMode === DisplayModes.Degree
      ? degreeId.split('')
      : pitchId.split('')

  return [note, modifiers.join('')]
}
