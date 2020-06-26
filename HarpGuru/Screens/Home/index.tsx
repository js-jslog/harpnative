import Animated, {useCode, Value, Clock, startClock, cond, eq, set, interpolate, Extrapolate, add} from 'react-native-reanimated'
import {StyleSheet, View} from 'react-native'
import React from 'react'

import type { ScreenProps } from '../types'
import { themeColors } from '../../Styles'
import { HarpFace } from '../../HarpFace'
import { SwipeControlWrapper } from '../../Controls'


const { pageColor } = themeColors

const styles = StyleSheet.create({
  guruhome: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: pageColor,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  headsupOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'red',
    opacity: 0.5,
    height: 90,
  }
})


export const HomeScreen = (props: ScreenProps): React.ReactElement => {
  const { activeHarpStrata, activeDisplayMode, setActiveHarpStrata, setActiveDisplayMode } = props

  const swipeControlProps = { activeDisplayMode, setActiveDisplayMode }
  const harpFaceProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode }

  const clock = new Clock()
  const startTime = new Value<number>(0)
  useCode(() => [
    startClock(clock),
    cond(
      eq(startTime, 0),
      [ set(startTime, clock) ]
    ),
  ],
  [clock]
  )

  const position = interpolate(clock, {
    inputRange: [startTime, add(startTime, 500)],
    outputRange: [-1000, 1000],
    extrapolate: Extrapolate.CLAMP,
  })


  return (
    <>
      <SwipeControlWrapper {...swipeControlProps}>
        <View style={styles.guruhome}>
          <HarpFace {...harpFaceProps} />
        </View>
      </SwipeControlWrapper>
      <Animated.View
        style={[styles.headsupOverlay, {
          transform: [
            { translateX: position }
          ],
        }]}
      >
      </Animated.View>
    </>
  )
}
