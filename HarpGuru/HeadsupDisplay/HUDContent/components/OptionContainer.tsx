import { PanGestureHandler, PanGestureHandlerGestureEvent, State } from 'react-native-gesture-handler'
import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { HarpStrata } from 'harpstrata'

import { themeSizes } from '../../../Styles'
import {DisplayModes} from '../../../HarpFace'

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
  readonly nudgeFunction: (arg0: HarpStrata, arg1: 'UP' | 'DOWN', arg2: DisplayModes) => HarpStrata
  readonly activeHarpStrata: HarpStrata
  readonly setActiveHarpStrata: (arg0: HarpStrata) => void
  readonly activeDisplayMode: DisplayModes
}

const Title = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.title}>{children}</Text>
}
const Variable = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.variable}>{children}</Text>
}

export const OptionContainer = (props: OptionContainerProps): React.ReactElement => {
  const { title, optionId, activeHarpStrata, setActiveHarpStrata, activeDisplayMode, nudgeFunction } = props
  const handlePozitionSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationY > 0) {
        setActiveHarpStrata(nudgeFunction(activeHarpStrata, 'UP', activeDisplayMode))
      } else {
        setActiveHarpStrata(nudgeFunction(activeHarpStrata, 'DOWN', activeDisplayMode))
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
