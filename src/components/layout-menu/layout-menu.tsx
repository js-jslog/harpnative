import { useGlobal } from 'reactn'
import Animated from 'react-native-reanimated'
import { TapGestureHandler } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React from 'react'

import { Option } from '../option'
import { getMenuStylesAndAnimationVals } from '../../utils'
import type { MenuProps } from '../../types'

import { useNudgeHarpStrataByApparatus, useNudgeExperienceMode } from './hooks'

export const LayoutMenu = ({
  hideMenu,
  hideLabel,
  tapHandler,
}: MenuProps): React.ReactElement => {
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
    styles,
    menuSlideTranslation,
    menuScale,
    menuBackgroundColor,
    labelOpacity,
    labelCounterScale,
  } = getMenuStylesAndAnimationVals(hideMenu, hideLabel, 'RIGHT')

  return (
    <Animated.View
      style={[
        styles.animated,
        {
          transform: [
            { translateX: menuSlideTranslation },
            { scale: menuScale },
          ],
        },
      ]}
    >
      <TapGestureHandler onHandlerStateChange={tapHandler}>
        <Animated.View
          style={[
            styles.overlay,
            {
              backgroundColor: menuBackgroundColor,
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
                  transform: [{ scale: labelCounterScale }],
                  opacity: labelOpacity,
                },
              ]}
            >
              <View style={styles.labelAligner}>
                <Text style={styles.text}>Settings</Text>
              </View>
            </Animated.View>
          </View>
        </Animated.View>
      </TapGestureHandler>
    </Animated.View>
  )
}

export const LayoutMenuMemo = ({
  hideMenu,
  hideLabel,
  tapHandler,
}: MenuProps): React.ReactElement => {
  const [activeHarpStrata] = useGlobal('activeHarpStrata')
  const [activeExperienceMode] = useGlobal('activeExperienceMode')
  const {
    apparatus: { id: apparatusId },
  } = activeHarpStrata
  const props = {
    hideMenu,
    hideLabel,
    tapHandler,
  }

  return React.useMemo(() => <LayoutMenu {...props} />, [
    hideMenu,
    hideLabel,
    tapHandler,
    apparatusId,
    activeExperienceMode,
  ])
}
