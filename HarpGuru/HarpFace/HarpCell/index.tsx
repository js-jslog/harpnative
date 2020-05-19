import {View, StyleSheet, Button} from 'react-native'
import React from 'react'
import { getHarpStrata } from 'harpstrata'
import type { HarpStrataProps } from 'harpstrata'

import { DisplayModes } from '../HarpFace'

import { getToggledActiveDegreeIds } from './getToggledActiveDegreeIds'
import { analysePosition } from './analysePosition'
import type { PositionFacts } from './analysePosition'

import {HarpCellProps} from './types'

const styles = StyleSheet.create({
  cell: {
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
})

export const HarpCell = (props: HarpCellProps): React.ReactElement => {
  const positionFacts: PositionFacts = analysePosition(props)
  const { setActiveHarpStrata, harpStrata, displayMode } = props
  const { thisDegree, thisPitch } = positionFacts
  const { id: degreeId } = thisDegree || { id: undefined }
  const { id: pitchId } = thisPitch || { id: undefined }

  const displayValue = (displayMode === DisplayModes.Degree ? degreeId : pitchId)

  const { apparatus: { id: apparatusId }, pozitionId, harpKeyId, isActiveComplex: { activeDegreeIds }} = harpStrata

  const toggleActiveIdsIfHoleExists = (): void => {
    if (degreeId === undefined) return

    const newActiveDegreeIds = getToggledActiveDegreeIds(degreeId, activeDegreeIds)
    const activeIds = newActiveDegreeIds

    const newHarpStrataProps: HarpStrataProps = {
      apparatusId, pozitionId, harpKeyId, activeIds
    }
    const newHarpStrata = getHarpStrata(newHarpStrataProps)
    setActiveHarpStrata(newHarpStrata)
  }

  const accessibleContent = 
    <View accessible={true} accessibilityRole='button' style={styles.cell}>
      <Button onPress={(): void => toggleActiveIdsIfHoleExists()} title={displayValue || ''} />
    </View>

  const inAccessibleContent = 
    <View accessible={false} style={styles.cell}>
    </View>

  const content = (thisDegree === undefined ? inAccessibleContent : accessibleContent)

  return content
}

export type { YXCoord } from './types'
