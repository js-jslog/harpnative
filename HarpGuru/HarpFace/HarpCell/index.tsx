import styled from 'styled-components/native'
import React from 'react'
import { getHarpStrata } from 'harpstrata'
import type { HarpStrata, HarpStrataProps, DegreeIds } from 'harpstrata'

import { DisplayModes } from '../HarpFace'

import { getToggledActiveDegreeIds } from './getToggledActiveDegreeIds'
import { analysePosition } from './analysePosition'
import type { PositionFacts } from './analysePosition'

import {HarpCellProps} from './types'

const Text = styled.Text`
`
const TouchableOpacity = styled.TouchableOpacity`
  background-color: #b00;
  justify-content: center;
  align-items: center;
  width: 30px;
  height:30px;
`

const setNewHarpStrata = (activeHarpStrata: HarpStrata, setActiveHarpStrata: (activeHarpStrata: HarpStrata) => void, toggledDegreeId: DegreeIds): void => {
  const { apparatus: { id: apparatusId }, pozitionId, harpKeyId, isActiveComplex: { activeDegreeIds }} = activeHarpStrata

  const newActiveDegreeIds = getToggledActiveDegreeIds(toggledDegreeId, activeDegreeIds)
  const activeIds = newActiveDegreeIds

  const newHarpStrataProps: HarpStrataProps = {
    apparatusId, pozitionId, harpKeyId, activeIds
  }
  const newHarpStrata = getHarpStrata(newHarpStrataProps)
  setActiveHarpStrata(newHarpStrata)

}

export const HarpCell = (props: HarpCellProps): React.ReactElement => {
  const positionFacts: PositionFacts = analysePosition(props)
  const { setActiveHarpStrata, activeHarpStrata, activeDisplayMode } = props
  const { thisDegree, thisPitch } = positionFacts
  const { id: degreeId } = thisDegree || { id: undefined }
  const { id: pitchId } = thisPitch || { id: undefined }

  const displayValue = (activeDisplayMode === DisplayModes.Degree ? degreeId : pitchId)


  const toggleActiveIdsIfHoleExists = (): void => {
    if (degreeId === undefined) return
    setNewHarpStrata(activeHarpStrata, setActiveHarpStrata, degreeId)
  }

  const accessibleContent = 
    <TouchableOpacity
      accessible={true}
      accessibilityRole='button'
      onPress={(): void => toggleActiveIdsIfHoleExists()} >
      <Text>{displayValue}</Text>
    </TouchableOpacity>

  const inAccessibleContent = 
    <TouchableOpacity disabled={true} accessible={false} >
    </TouchableOpacity>

  const content = (thisDegree === undefined ? inAccessibleContent : accessibleContent)

  return content
}

export type { YXCoord } from './types'
