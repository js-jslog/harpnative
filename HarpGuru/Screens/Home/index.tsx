import {PanGestureHandler, State, PanGestureHandlerStateChangeEvent} from 'react-native-gesture-handler'
import {StyleSheet, View} from 'react-native'
import React from 'react'

import type { ScreenProps } from '../types'
import { themeColors } from '../../Styles'
import { HarpFace, DisplayModes } from '../../HarpFace'

const { pageColor } = themeColors

const styles = StyleSheet.create({
  guruhome: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: pageColor,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
})


export const HomeScreen = (props: ScreenProps): React.ReactElement => {
  const { activeHarpStrata, activeDisplayMode, setActiveHarpStrata, setActiveDisplayMode } = props

  const harpFaceProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode }

  const handleGestureStateChange = ({nativeEvent}: PanGestureHandlerStateChangeEvent) => {
    if (nativeEvent.state !== State.END) return

    if (activeDisplayMode === DisplayModes.Degree) {
      setActiveDisplayMode(DisplayModes.Pitch)
      return
    }
    setActiveDisplayMode(DisplayModes.Degree)
  }

  return (
    <PanGestureHandler onHandlerStateChange={handleGestureStateChange}>
      <View style={styles.guruhome}>
        <HarpFace {...harpFaceProps} />
      </View>
    </PanGestureHandler>
  )
}
