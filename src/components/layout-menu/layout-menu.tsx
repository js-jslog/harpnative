import { useGlobal } from 'reactn'
import {useTimingTransition} from 'react-native-redash'
import Animated, {Easing, multiply} from 'react-native-reanimated'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React from 'react'

import { Option } from '../option'
import { colors, sizes } from '../../styles'
import { useNudgeDisplayMode } from '../../hooks'

import { useNudgeHarpStrataByApparatus, useNudgeExperienceMode } from './hooks'

type LayoutMenuProps = {
  readonly onScreen: boolean
}

const { 9: labelProtrusion, 7: fontSize } = sizes

const styles = StyleSheet.create({
  animated: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    left: labelProtrusion * -1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.inertOutline,
    opacity: 0.5,
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
    transform: [{rotate: '90deg'}],
  },
  labelAligner: {
    alignItems: 'center',
    width: 500,
  },
  text: {
    fontSize
  }
})

export const LayoutMenu = ({
  onScreen,
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

  const [activeDisplayMode] = useGlobal('activeDisplayMode')
  const nudgeDisplayMode = useNudgeDisplayMode()
  const displayModeOptionProps = {
    title: 'Display',
    optionId: activeDisplayMode,
    nudgeFunction: nudgeDisplayMode,
  }

  const transitionVal = useTimingTransition(!onScreen, {
    duration: 400,
    easing: Easing.inOut(Easing.ease)
  })
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
  const guaranteeOffScreenWidth =
    windowWidth > windowHeight ? windowWidth : windowHeight
  const translateX = multiply(transitionVal, guaranteeOffScreenWidth)

  return (
    <Animated.View
      style={[
        styles.animated,
        {
          transform: [
            { translateX: translateX },
          ],
        },
      ]}
    >
      <View style={styles.overlay}>
        <View style={styles.mainContents}>
          <Option {...apparatusOptionProps} />
          <Option {...experienceModeOptionProps} />
          <Option {...displayModeOptionProps} />
        </View>
        <View style={styles.rotatedLabel}>
          <View style={styles.labelAligner}>
            <Text style={styles.text}>Setup Menu</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  )
}
