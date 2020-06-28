import { PanGestureHandler, PanGestureHandlerGestureEvent, State } from 'react-native-gesture-handler'
import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { PozitionIds, HarpStrata } from 'harpstrata'

import {nudgeHarpStrataByPozition} from '../nudgeHarpStrataByPozition'
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

type PozitionSelectorProps = {
  readonly pozitionId: PozitionIds
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

export const PozitionSelector = (props: PozitionSelectorProps): React.ReactElement => {
  const { pozitionId, activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const handlePozitionSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationY > 0) {
        setActiveHarpStrata(nudgeHarpStrataByPozition(activeHarpStrata, 'UP', activeDisplayMode))
      } else {
        setActiveHarpStrata(nudgeHarpStrataByPozition(activeHarpStrata, 'DOWN', activeDisplayMode))
      }
    }
  }

  return (
    <PanGestureHandler
      activeOffsetY={[swipeThreshold * -1, swipeThreshold]}
      onHandlerStateChange={handlePozitionSwipe}
    >
      <View style={styles.column}>
        <Title>Position</Title>
        <Variable>{pozitionId}</Variable>
      </View>
    </PanGestureHandler>
  )
}
