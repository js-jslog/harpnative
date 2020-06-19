import { useTimingTransition, onGestureEvent } from 'react-native-redash'
import Animated, { Value, interpolate } from 'react-native-reanimated'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
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


  const state = new Value(State.UNDETERMINED)
  const translationX = new Value(0)
  const translationY = new Value(0)
  const gestureHandler = onGestureEvent({
    state,
    translationX,
    translationY
  })


  const [flipped, setFlipped] =  useState<0 | 1>(0)
  const [slid, setSlid] =  useState<0 | 1>(0)

  const transitionFlip = useTimingTransition(flipped, { duration: 400 })
  const transitionSlide = useTimingTransition(slid, { duration: 400 })
  const rotate = interpolate(transitionFlip, {
    inputRange: [0, 1],
    outputRange: [0, Math.PI / 1]
  })
  const slide = Animated.add(translationX, 100)
  //const slide = interpolate(transitionSlide, {
  //  inputRange: [0, 1],
  //  outputRange: [0, 100]
  //})

  return (
    <View>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={styles.wrapper} >
          <ActivityLegendColumn {...degreeActivityLegendColumnProps} />
          <ActivityLegendColumn {...pitchActivityLegendColumnProps} />
        </Animated.View>
      </PanGestureHandler>
      <ScrollView style={styles.scrollview}>
        <Animated.View style={[styles.switch, {
          transform: [{ rotate }],
          translateX: slide
        }]} />
        <Button title={'flip'} onPress={(): void => {flipped === 0 ? setFlipped(1) : setFlipped(0)}} />
        <Button title={'slide'} onPress={(): void => {slid === 0 ? setSlid(1) : setSlid(0)}} />
      </ScrollView>
    </View>
  )
}
