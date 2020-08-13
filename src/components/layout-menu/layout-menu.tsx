import { useGlobal } from 'reactn'
import Animated from 'react-native-reanimated'
import { TapGestureHandler } from 'react-native-gesture-handler'
import type { TapGestureHandlerStateChangeEvent } from 'react-native-gesture-handler'
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import { Option } from '../option'
import { sizes } from '../../styles'

import { createMenuAnimationValues } from './utils'
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

  const {
    translateX,
    scale,
    backgroundColor,
    opacity,
    reverseScale,
  } = createMenuAnimationValues(hideMenu, hideLabel, labelProtrusion)

  return (
    <Animated.View
      style={[
        styles.animated,
        {
          transform: [{ translateX: translateX }, { scale: scale }],
        },
      ]}
    >
      <TapGestureHandler onHandlerStateChange={tapHandler}>
        <Animated.View
          style={[
            styles.overlay,
            {
              backgroundColor,
            },
          ]}
        >
          <View style={styles.mainContents}>
            <Option {...apparatusOptionProps} />
            <Option {...experienceModeOptionProps} />
          </View>
          <View style={styles.rotatedLabel}>
            <Animated.View
              style={[
                {
                  transform: [{ scale: reverseScale }],
                  opacity: opacity,
                },
              ]}
            >
              <View style={styles.labelAligner}>
                <Text style={styles.text}>Setup Menu</Text>
              </View>
            </Animated.View>
          </View>
        </Animated.View>
      </TapGestureHandler>
    </Animated.View>
  )
}
