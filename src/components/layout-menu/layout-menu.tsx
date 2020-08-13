import { useGlobal } from 'reactn'
import { useTimingTransition } from 'react-native-redash'
import Animated, {
  Easing,
  multiply,
  add,
  sub,
  interpolate,
} from 'react-native-reanimated'
import { TapGestureHandler } from 'react-native-gesture-handler'
import type { TapGestureHandlerStateChangeEvent } from 'react-native-gesture-handler'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React from 'react'

import { Option } from '../option'
import { colors, sizes } from '../../styles'

import { useNudgeHarpStrataByApparatus, useNudgeExperienceMode } from './hooks'

type LayoutMenuProps = {
  readonly hideMenu: boolean
  readonly hideLabel: boolean
  readonly tapHandler: (arg0: TapGestureHandlerStateChangeEvent) => void
}

const { 10: labelProtrusion, 9: fontSize, 7: borderRadius } = sizes

const styles = StyleSheet.create({
  animated: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    left: labelProtrusion * -1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.pageColor,
    borderWidth: 1,
    borderRadius,
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

export const LayoutMenu = ({
  hideMenu,
  hideLabel,
  tapHandler,
}: LayoutMenuProps): React.ReactElement => {
  const [activeHarpStrata] = useGlobal('activeHarpStrata')
  const nudgeHarpStrataByApparatus = useNudgeHarpStrataByApparatus()
  const {
    apparatus: { id: apparatusId },
  } = activeHarpStrata
  const apparatusOptionProps = {
    title: 'Layout',
    optionId: apparatusId,
    nudgeFunction: nudgeHarpStrataByApparatus,
  }

  const [activeExperienceMode] = useGlobal('activeExperienceMode')
  const nudgeExperienceMode = useNudgeExperienceMode()
  const experienceModeOptionProps = {
    title: 'Experience',
    optionId: activeExperienceMode,
    nudgeFunction: nudgeExperienceMode,
  }

  const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
  const guaranteeOffScreenWidth =
    windowWidth > windowHeight ? windowWidth : windowHeight
  const hideMenuVal = useTimingTransition(hideMenu, {
    duration: 400,
    easing: Easing.inOut(Easing.ease),
  })
  const hideLabelVal = useTimingTransition(hideLabel, {
    duration: 400,
    easing: Easing.inOut(Easing.ease),
  })
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
  const opacity = interpolate(hideMenuVal, {
    inputRange: [0, 1],
    outputRange: [0.7, 0.4],
  })
  const scale = interpolate(hideMenuVal, {
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  })
  const reverseScale = interpolate(scale, {
    inputRange: [0.5, 1],
    outputRange: [1, 0.5],
  })

  return (
    <Animated.View
      style={[
        styles.animated,
        {
          transform: [{ translateX: translateX }, { scale: scale }],
          opacity: opacity,
        },
      ]}
    >
      <TapGestureHandler onHandlerStateChange={tapHandler}>
        <View style={styles.overlay}>
          <View style={styles.mainContents}>
            <Option {...apparatusOptionProps} />
            <Option {...experienceModeOptionProps} />
          </View>
          <View style={styles.rotatedLabel}>
            <View style={styles.labelAligner}>
              <Animated.View
                style={[
                  {
                    transform: [{ scale: reverseScale }],
                  },
                ]}
              >
                <Text style={styles.text}>Setup Menu</Text>
              </Animated.View>
            </View>
          </View>
        </View>
      </TapGestureHandler>
    </Animated.View>
  )
}
