import {PanGestureHandler, PanGestureHandlerGestureEvent, State} from 'react-native-gesture-handler'
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import {HUDContentProps} from '../types'
import {incrementHarpStrataByRootPitch} from '../incrementHarpStrataByRootPitch'
import {incrementHarpStrataByPozition} from '../incrementHarpStrataByPozition'
import {incrementHarpStrataByHarpKey} from '../incrementHarpStrataByHarpKey'
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

export const HUDContent = (props: HUDContentProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const { harpKeyId, pozitionId, rootPitchId } = activeHarpStrata

  const handlePozitionSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.ACTIVE) {
      const nextHarpStrata = incrementHarpStrataByPozition(activeHarpStrata, activeDisplayMode)
      setActiveHarpStrata(nextHarpStrata)
    }
  }
  const handleRootPitchSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.ACTIVE) {
      const nextHarpStrata = incrementHarpStrataByRootPitch(activeHarpStrata, activeDisplayMode)
      setActiveHarpStrata(nextHarpStrata)
    }
  }

  const handleHarpKeySwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.ACTIVE) {
      const nextHarpStrata = incrementHarpStrataByHarpKey(activeHarpStrata, activeDisplayMode)
      setActiveHarpStrata(nextHarpStrata)
    }
  }


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
