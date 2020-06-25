import { TapGestureHandler, TapGestureHandlerStateChangeEvent, State } from 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import React from 'react'

import { HarpCellProps } from '../types'
import { getStyles } from '../styles'
import { setNewHarpStrata } from '../setNewHarpStrata'
import { getDisplayValue } from '../getDisplayValue'
import { analysePosition } from '../analysePosition'

export const HarpCell = (props: HarpCellProps): React.ReactElement => {
  const { setActiveHarpStrata, activeHarpStrata } = props
  const positionFacts = analysePosition(props)
  const { thisDegree } = positionFacts
  const { id: degreeId } = thisDegree || { id: undefined }

  const displayValue = getDisplayValue(props)

  const styles = getStyles(props)

  const handleTapStateChange = ({nativeEvent}: TapGestureHandlerStateChangeEvent) => {
    if (nativeEvent.state !== State.END) return
    if (degreeId === undefined) return

    setNewHarpStrata(activeHarpStrata, setActiveHarpStrata, degreeId)
  }

  const accessibleContent = 
  <TapGestureHandler onHandlerStateChange={handleTapStateChange}>
    <View
      accessible={true}
      accessibilityRole='button'
      style={styles.cell}>
      <Text style={styles.text}>
        {displayValue}
      </Text>
    </View>
  </TapGestureHandler>

  const inAccessibleContent = 
  <View accessible={false} style={styles.cell} >
    <View style={styles.cell} />
  </View>

  const content = (thisDegree === undefined ? inAccessibleContent : accessibleContent)

  return content
}
