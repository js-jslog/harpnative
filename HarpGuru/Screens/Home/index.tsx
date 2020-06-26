import Animated, {useCode, Value, Clock, startClock, cond, eq, set, interpolate, Extrapolate, add, greaterOrEq, neq, and} from 'react-native-reanimated'
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
  const inStartTime = new Value<number>(-1)
  const outStartTime = new Value<number>(-1)
  useCode(() => [
    startClock(clock),
    cond(
      eq(inStartTime, -1),
      [ set(inStartTime, clock) ]
    ),
    cond(
      and(eq(outStartTime, -1), greaterOrEq(clock, add(inStartTime, 1500))),
      [ set(outStartTime, clock) ]
    ),
  ],
  [clock]
  )

  const positionIn = interpolate(clock, {
    inputRange: [inStartTime, add(inStartTime, 500)],
    outputRange: [-1000, 0],
    extrapolate: Extrapolate.CLAMP,
  })
  const positionOut = cond(
    neq(outStartTime, -1),
    interpolate(clock, {
      inputRange: [outStartTime, add(outStartTime, 500)],
      outputRange: [0, 1000],
      extrapolate: Extrapolate.CLAMP,
    })
  )

  const position = add(positionIn, positionOut)


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
