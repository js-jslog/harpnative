import Animated from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'
import type { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { Button, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { DegreeIds } from 'harpstrata'

import type { ActivityLegendProps } from '../types'
import { ActivityLegendColumn } from '../../ActivityLegendColumn'
import { DisplayModes } from '../../../HarpFace'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  scrollview: {
    width: 100,
    backgroundColor: 'red',
  },
  switch: {
    width: 100,
    height: 50,
    backgroundColor: 'yellow'
  }
})

export const ActivityLegend = (props: ActivityLegendProps): ReactElement => {
  const { setActiveDisplayMode, activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const { rootPitchId, isActiveComplex: { activeDegreeIds, activePitchIds }} = activeHarpStrata
  const degreeActivityLegendColumnProps = { activeHarpStrata, setActiveHarpStrata, originId: DegreeIds.Root, activeIds: activeDegreeIds, activeDisplayMode }
  const pitchActivityLegendColumnProps = { activeHarpStrata, setActiveHarpStrata, originId: rootPitchId, activeIds: activePitchIds, activeDisplayMode }

  const handleSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent): void => {
    if (nativeEvent.translationX > nativeEvent.translationY) setActiveDisplayMode(DisplayModes.Pitch)
    if (nativeEvent.translationX < nativeEvent.translationY) setActiveDisplayMode(DisplayModes.Degree)
  }

  const handleGesture = ({nativeEvent}: PanGestureHandlerGestureEvent): void => {
    const { translationX: x, translationY: y } = nativeEvent
    const delta = x - y
    const value = (delta < 100 && delta > -100) ? delta : 0
    setOffset(value)
  }


  const [activity, setActivity] =  useState<0 | 1>(0)
  const [ offset, setOffset ] = useState(0)

  return (
    <>
      <PanGestureHandler
        onHandlerStateChange={handleSwipe}
        onGestureEvent={handleGesture}
      >
        <View style={styles.wrapper} >
          <ActivityLegendColumn {...degreeActivityLegendColumnProps} />
          <ActivityLegendColumn {...pitchActivityLegendColumnProps} />
        </View>
      </PanGestureHandler>
      <ScrollView style={styles.scrollview}>
        <Animated.View style={[styles.switch, {
          transform: [{ translateX: offset }],
        }]} />
        <Button title={'click'} onPress={(): void => {activity === 0 ? setActivity(1) : setActivity(0)}} />
      </ScrollView>
    </>
  )
}
