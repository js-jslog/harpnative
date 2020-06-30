import { TapGestureHandler, TapGestureHandlerStateChangeEvent, State, LongPressGestureHandler } from 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import React from 'react'

import { HarpCellProps } from '../types'
import { getStyles } from '../styles'
import { setPozitionRootAtCell } from '../setPozitionRootAtCell'
import { setNewHarpStrata } from '../setNewHarpStrata'
import { getDisplayValue } from '../getDisplayValue'
import { analysePosition } from '../analysePosition'

export const HarpCell = (props: HarpCellProps): React.ReactElement => {
  const { setActiveHarpStrata, activeHarpStrata } = props
  const positionFacts = analysePosition(props)
  const { thisDegree, thisPitch } = positionFacts
  const { id: degreeId } = thisDegree || { id: undefined }
  const { id: pitchId } = thisPitch || { id: undefined }

  const displayValue = getDisplayValue(props)

  const styles = getStyles(props)

  const handleTapStateChange = ({nativeEvent}: TapGestureHandlerStateChangeEvent) => {
    if (nativeEvent.state !== State.END) return
    if (degreeId === undefined) return

    // TODO: have the setActiveHarpStrata be called outside the helper like in the long press
    // handler below.
    // Also, this function needs renaming since it's not specific enough anymore.
    setNewHarpStrata(activeHarpStrata, setActiveHarpStrata, degreeId)
  }

  const handleLongPressStateChange = ({nativeEvent}: TapGestureHandlerStateChangeEvent) => {
    if (nativeEvent.state !== State.ACTIVE) return
    if (pitchId === undefined) return

    setActiveHarpStrata(setPozitionRootAtCell(activeHarpStrata, pitchId))
  }

  const accessibleContent = 
    <LongPressGestureHandler onHandlerStateChange={handleLongPressStateChange}>
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
    </LongPressGestureHandler>

  const inAccessibleContent = 
    <View accessible={false} style={styles.cell} >
      <View style={styles.cell} />
    </View>

  const content = (thisDegree === undefined ? inAccessibleContent : accessibleContent)

  return content
}
