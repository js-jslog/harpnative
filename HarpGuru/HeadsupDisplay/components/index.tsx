import Animated, {Clock, Value, useCode, startClock, cond, eq, set, and, greaterOrEq, add, interpolate, Extrapolate, neq} from 'react-native-reanimated'
import {StyleSheet, Dimensions} from 'react-native'
import React from 'react'

import type { HeadsupDisplayProps } from '../types'

const styles = StyleSheet.create({
  headsupOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'red',
    opacity: 0.5,
    height: 90,
  }
})

const { width: windowWidth } = Dimensions.get('window')
const scrollDuration = 200
const scrollOutDelay = 600

export const HeadsupDisplay = (props: HeadsupDisplayProps): React.ReactElement => {
  const { children } = props

  const clock = new Clock()
  const inStartTime = new Value<number>(-1)
  const outStartTime = new Value<number>(-1)
  useCode(() => [
    startClock(clock),
    cond(
      eq(inStartTime, -1),
      [ set(inStartTime, clock) ]
    ),
    cond(
      and(eq(outStartTime, -1), greaterOrEq(clock, add(inStartTime, scrollOutDelay))),
      [ set(outStartTime, clock) ]
    ),
  ],
  [clock]
  )

  const positionIn = interpolate(clock, {
    inputRange: [inStartTime, add(inStartTime, scrollDuration)],
    outputRange: [windowWidth * -1, 0],
    extrapolate: Extrapolate.CLAMP,
  })
  const positionOut = cond(
    neq(outStartTime, -1),
    interpolate(clock, {
      inputRange: [outStartTime, add(outStartTime, scrollDuration)],
      outputRange: [0, windowWidth],
      extrapolate: Extrapolate.CLAMP,
    })
  )

  const position = add(positionIn, positionOut)
  return (
    <Animated.View
      style={[styles.headsupOverlay, {
        transform: [
          { translateX: position }
        ],
      }]}>
      { children }
    </Animated.View>
  )
}
