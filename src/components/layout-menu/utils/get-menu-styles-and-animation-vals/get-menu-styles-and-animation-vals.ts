import { useTimingTransition, interpolateColor } from 'react-native-redash'
import {
  Easing,
  interpolate,
  sub,
  multiply,
  add,
  Node,
} from 'react-native-reanimated'
import { StyleSheet, Dimensions } from 'react-native'
import type { TextStyle, ViewStyle } from 'react-native'

import { sizes, colors } from '../../../../styles'

type MenuStyles = {
  readonly animated: ViewStyle
  readonly overlay: ViewStyle
  readonly mainContents: ViewStyle
  readonly rotatedLabel: ViewStyle
  readonly labelAligner: ViewStyle
  readonly text: TextStyle
}

type StyleAndAnimationVals = {
  readonly styles: MenuStyles
  readonly menuSlideTranslation: Node<number>
  readonly menuScale: Node<number>
  readonly menuBackgroundColor: Node<number>
  readonly labelOpacity: Node<number>
  readonly labelCounterScale: Node<number>
}

export const getMenuStylesAndAnimationVals = (
  hideMenu: boolean,
  hideLabel: boolean,
  stashDirection: 'RIGHT' | 'LEFT'
): StyleAndAnimationVals => {
  const { 10: labelProtrusion, 9: fontSize, 7: borderRadius } = sizes
  const directionMultiplier = stashDirection === 'RIGHT' ? -1 : 1

  const styles = StyleSheet.create({
    animated: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 10,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      left: labelProtrusion * directionMultiplier,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      borderRadius,
      opacity: 0.7,
    },
    mainContents: {
      ...StyleSheet.absoluteFillObject,
      flexDirection: 'row',
      left: labelProtrusion,
    },
    rotatedLabel: {
      overflow: 'visible',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: labelProtrusion,
      width: labelProtrusion,
      transform: [{ rotate: '90deg' }],
    },
    labelAligner: {
      alignItems: 'center',
      width: 500,
    },
    text: {
      fontSize,
    },
  })
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
  const menuSlideTranslation = add(hideMenuTranslation, hideLabelTranslation)
  const menuScale = interpolate(hideMenuVal, {
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  })
  const menuBackgroundColor = interpolateColor(hideMenuVal, {
    inputRange: [0, 1],
    outputRange: [colors.pageColor, colors.homeRowsColor],
  })

  // Label animation values
  const labelOpacity = interpolate(hideMenuVal, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  })
  const labelCounterScale = interpolate(menuScale, {
    inputRange: [0.5, 1],
    outputRange: [1, 0.5],
  })

  return {
    styles,
    menuSlideTranslation,
    menuScale,
    menuBackgroundColor,
    labelOpacity,
    labelCounterScale,
  }
}