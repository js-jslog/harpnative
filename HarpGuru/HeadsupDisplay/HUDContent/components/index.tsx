import {PanGestureHandler, PanGestureHandlerGestureEvent, State} from 'react-native-gesture-handler'
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import {HUDContentProps} from '../types'
import {nudgeHarpStrataByRootPitch} from '../nudgeHarpStrataByRootPitch'
import {nudgeHarpStrataByPozition} from '../nudgeHarpStrataByPozition'
import {nudgeHarpStrataByHarpKey} from '../nudgeHarpStrataByHarpKey'
import { themeSizes, themeColors } from '../../../Styles'

import { OptionContainer } from './OptionContainer'

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

  const handleRootPitchSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationY > 0) {
        setActiveHarpStrata(nudgeHarpStrataByRootPitch(activeHarpStrata, 'UP', activeDisplayMode))
      } else {
        setActiveHarpStrata(nudgeHarpStrataByRootPitch(activeHarpStrata, 'DOWN', activeDisplayMode))
      }
    }
  }

  const handleHarpKeySwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationY > 0) {
        setActiveHarpStrata(nudgeHarpStrataByHarpKey(activeHarpStrata, 'UP', activeDisplayMode))
      } else {
        setActiveHarpStrata(nudgeHarpStrataByHarpKey(activeHarpStrata, 'DOWN', activeDisplayMode))
      }
    }
  }

  const partiallyAppliedNudgeFunction = (direction: 'UP' | 'DOWN') => {
    return nudgeHarpStrataByPozition(activeHarpStrata, direction, activeDisplayMode)
  }

  const optionContainerProps = {
    title: 'Position',
    optionId: pozitionId,
    nudgeFunction: partiallyAppliedNudgeFunction,
    setActiveHarpStrata,
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
      <OptionContainer {...optionContainerProps}/>
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
