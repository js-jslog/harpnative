import { PanGestureHandler, PanGestureHandlerGestureEvent, State } from 'react-native-gesture-handler'
import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { HarpStrata } from 'harpstrata'

import { themeSizes } from '../../../Styles'

const { 7: variableSize, 8: titleSize } = themeSizes
const { 8: swipeThreshold } = themeSizes

const styles = StyleSheet.create({
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

type OptionContainerProps = {
  readonly title: string
  readonly optionId: string
  readonly nudgeFunction: (arg0: 'UP' | 'DOWN') => HarpStrata
  readonly setActiveHarpStrata: (arg0: HarpStrata) => void
}

const Title = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.title}>{children}</Text>
}
const Variable = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.variable}>{children}</Text>
}

const isPastActivationThreshold = (translation: number) => {
  if (translation > swipeThreshold) return true
  if (translation < swipeThreshold * -1) return true
  return false
}

export const OptionContainer = (props: OptionContainerProps): React.ReactElement => {
  const { title, optionId, setActiveHarpStrata, nudgeFunction } = props
  const handlePozitionSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.END && isPastActivationThreshold(nativeEvent.translationY)) {
      if (nativeEvent.translationY > 0) {
        setActiveHarpStrata(nudgeFunction('UP'))
      } else {
        setActiveHarpStrata(nudgeFunction('DOWN'))
      }
    }
  }

  return (
    <PanGestureHandler
      activeOffsetY={[swipeThreshold * -1, swipeThreshold]}
      onHandlerStateChange={handlePozitionSwipe}
    >
      <View style={styles.column}>
        <Title>{title}</Title>
        <Variable>{optionId}</Variable>
      </View>
    </PanGestureHandler>
  )
}
