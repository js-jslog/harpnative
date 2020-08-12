import { useGlobal } from 'reactn'
import { useTimingTransition } from 'react-native-redash'
import Animated, { Easing, multiply } from 'react-native-reanimated'
import { TapGestureHandler } from 'react-native-gesture-handler'
import type { TapGestureHandlerStateChangeEvent } from 'react-native-gesture-handler'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React from 'react'

import { Option } from '../option'
import { colors, sizes } from '../../styles'
import { useNudgeDisplayMode } from '../../hooks'

import {
  useNudgeHarpStrataByHarpKey,
  useNudgeHarpStrataByPozition,
  useNudgeHarpStrataByRootPitch,
} from './hooks'

type CovariantMenuProps = {
  readonly onScreen: boolean
  readonly tapHandler: (arg0: TapGestureHandlerStateChangeEvent) => void
}

const { 9: labelProtrusion, 7: fontSize } = sizes

const styles = StyleSheet.create({
  animated: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    right: labelProtrusion * -1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: colors.inertOutline,
    opacity: 0.5,
  },
  mainContents: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    right: labelProtrusion,
  },
  rotatedLabel: {
    overflow: 'visible',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: labelProtrusion,
    width: labelProtrusion,
    transform: [{ rotate: '-90deg' }],
  },
  labelAligner: {
    alignItems: 'center',
    width: 500,
  },
  text: {
    fontSize,
  },
})

export const CovariantMenu = ({
  onScreen,
  tapHandler,
}: CovariantMenuProps): React.ReactElement => {
  const [activeHarpStrata] = useGlobal('activeHarpStrata')

  const { harpKeyId } = activeHarpStrata
  const nudgeHarpStrataByHarpKey = useNudgeHarpStrataByHarpKey()
  const harpKeyOptionProps = {
    title: 'Harp Key',
    optionId: harpKeyId,
    nudgeFunction: nudgeHarpStrataByHarpKey,
  }

  const { pozitionId } = activeHarpStrata
  const nudgeHarpStrataByPozition = useNudgeHarpStrataByPozition()
  const pozitionOptionProps = {
    title: 'Position',
    optionId: pozitionId,
    nudgeFunction: nudgeHarpStrataByPozition,
  }

  const { rootPitchId } = activeHarpStrata
  const nudgeHarpStrataByRootPitch = useNudgeHarpStrataByRootPitch()
  const rootPitchOptionProps = {
    title: 'Position Key',
    optionId: rootPitchId,
    nudgeFunction: nudgeHarpStrataByRootPitch,
  }

  const [activeDisplayMode] = useGlobal('activeDisplayMode')
  const nudgeDisplayMode = useNudgeDisplayMode()
  const displayModeOptionProps = {
    title: 'Display',
    optionId: activeDisplayMode,
    nudgeFunction: nudgeDisplayMode,
  }

  const transitionVal = useTimingTransition(!onScreen, {
    duration: 400,
    easing: Easing.inOut(Easing.ease),
  })
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
  const guaranteeOffScreenWidth =
    windowWidth > windowHeight ? windowWidth : windowHeight
  const translateX = multiply(transitionVal, guaranteeOffScreenWidth * -1)

  return (
    <Animated.View
      style={[
        styles.animated,
        {
          transform: [{ translateX: translateX }],
        },
      ]}
    >
      <TapGestureHandler onHandlerStateChange={tapHandler}>
        <View style={styles.overlay}>
          <View style={styles.mainContents}>
            <Option {...harpKeyOptionProps} />
            <Option {...pozitionOptionProps} />
            <Option {...rootPitchOptionProps} />
            <Option {...displayModeOptionProps} />
          </View>
          <View style={styles.rotatedLabel}>
            <View style={styles.labelAligner}>
              <Text style={styles.text}>Tuning Menu</Text>
            </View>
          </View>
        </View>
      </TapGestureHandler>
    </Animated.View>
  )
}
