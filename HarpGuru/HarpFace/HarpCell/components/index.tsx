import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { getHarpStrata } from 'harpstrata'
import type { HarpStrata, HarpStrataProps, DegreeIds } from 'harpstrata'

import { HarpCellProps } from '../types'
import { getStyles } from '../styles'
import { getToggledActiveDegreeIds } from '../getToggledActiveDegreeIds'
import { analysePosition } from '../analysePosition'
import type { PositionFacts } from '../analysePosition'
import { DisplayModes } from '../../types'

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

  const styles = getStyles(props)

  const toggleActiveIdsIfHoleExists = (): void => {
    if (degreeId === undefined) return
    setNewHarpStrata(activeHarpStrata, setActiveHarpStrata, degreeId)
  }

  const accessibleContent = 
  <TouchableOpacity
    accessible={true}
    accessibilityRole='button'
    onPress={(): void => toggleActiveIdsIfHoleExists()}>
    <View style={styles.cell}>
      <Text style={styles.text}>
        {displayValue}
      </Text>
    </View>
  </TouchableOpacity>

  const inAccessibleContent = 
  <TouchableOpacity disabled={true} accessible={false} style={styles.cell} >
    <View style={styles.cell} />
  </TouchableOpacity>

  const content = (thisDegree === undefined ? inAccessibleContent : accessibleContent)

  return content
}
