import {PanGestureHandler, PanGestureHandlerGestureEvent, State} from 'react-native-gesture-handler'
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import {HUDContentProps} from '../types'
import { themeSizes, themeColors } from '../../../Styles'

const { 7: variableSize, 8: titleSize } = themeSizes
const { 8: swipeThreshold } = themeSizes

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    backgroundColor: themeColors.inertOutline,
    opacity: 0.5,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: titleSize
  },
  variable: {
    fontSize: variableSize
  }
})

type ChildProps = {
  readonly children: React.ReactNode
}

const Title = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.title}>{children}</Text>
}
const Variable = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.variable}>{children}</Text>
}

const handleHarpKeySwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
  if (nativeEvent.state === State.ACTIVE) {
    console.log('harp key swipe')
  }
}
const handlePozitionSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
  if (nativeEvent.state === State.ACTIVE) {
    console.log('position swipe')
  }
}
const handleRootPitchSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
  if (nativeEvent.state === State.ACTIVE) {
    console.log('position key swipe')
  }
}

export const HUDContent = (props: HUDContentProps): React.ReactElement => {
  const { harpKeyId, pozitionId, rootPitchId } = props

  return (
    <View style={styles.wrapper}>
      <PanGestureHandler
        activeOffsetY={swipeThreshold}
        onHandlerStateChange={handleHarpKeySwipe}
      >
        <View style={styles.column}>
          <Title>Harp Key</Title>
          <Variable>{harpKeyId}</Variable>
        </View>
      </PanGestureHandler>
      <PanGestureHandler
        activeOffsetY={swipeThreshold}
        onHandlerStateChange={handlePozitionSwipe}
      >
        <View style={styles.column}>
          <Title>Position</Title>
          <Variable>{pozitionId}</Variable>
        </View>
      </PanGestureHandler>
      <PanGestureHandler
        activeOffsetY={swipeThreshold}
        onHandlerStateChange={handleRootPitchSwipe}
      >
        <View style={styles.column}>
          <Title>Pozition Key</Title>
          <Variable>{rootPitchId}</Variable>
        </View>
      </PanGestureHandler>
    </View>
  )
}
