import { useTimingTransition, interpolateColor } from 'react-native-redash'
import {
  Easing,
  interpolate,
  sub,
  multiply,
  add,
  Node,
} from 'react-native-reanimated'
import { Dimensions } from 'react-native'

import { colors } from '../../../../styles'

type ManuAnimationValues = {
  readonly translateX: Node<number>
  readonly scale: Node<number>
  readonly backgroundColor: Node<number>
  readonly opacity: Node<number>
  readonly reverseScale: Node<number>
}

export const createMenuAnimationValues = (
  hideMenu: boolean,
  hideLabel: boolean,
  labelProtrusion: number
): ManuAnimationValues => {
  const hideMenuVal = useTimingTransition(hideMenu, {
    duration: 400,
    easing: Easing.inOut(Easing.ease),
  })
  const hideLabelVal = useTimingTransition(hideLabel, {
    duration: 400,
    easing: Easing.inOut(Easing.ease),
  })

  const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
  const guaranteeOffScreenWidth =
    windowWidth > windowHeight ? windowWidth : windowHeight

  // Menu animation values
  const hideMenuTranslation = interpolate(hideMenuVal, {
    inputRange: [0, 1],
    outputRange: [
      0,
      sub(guaranteeOffScreenWidth, multiply(guaranteeOffScreenWidth, 0.25)),
    ],
  })
  const hideLabelTranslation = interpolate(hideLabelVal, {
    inputRange: [0, 1],
    outputRange: [0, labelProtrusion],
  })
  const translateX = add(hideMenuTranslation, hideLabelTranslation)
  const scale = interpolate(hideMenuVal, {
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  })
  const backgroundColor = interpolateColor(hideMenuVal, {
    inputRange: [0, 1],
    outputRange: [colors.pageColor, colors.homeRowsColor],
  })

  // Label animation values
  const opacity = interpolate(hideMenuVal, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  })
  const reverseScale = interpolate(scale, {
    inputRange: [0.5, 1],
    outputRange: [1, 0.5],
  })

  return {
    translateX,
    scale,
    backgroundColor,
    opacity,
    reverseScale,
  }
}
