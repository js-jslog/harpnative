import { StyleSheet, View } from 'react-native'
import React from 'react'

import {HUDContentProps} from '../types'
import {nudgeHarpStrataByRootPitch} from '../nudgeHarpStrataByRootPitch'
import {nudgeHarpStrataByPozition} from '../nudgeHarpStrataByPozition'
import {nudgeHarpStrataByHarpKey} from '../nudgeHarpStrataByHarpKey'
import { themeColors } from '../../../Styles'

import { OptionContainer } from './OptionContainer'

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    backgroundColor: themeColors.inertOutline,
    opacity: 0.5,
  }
})

export const HUDContent = (props: HUDContentProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const { harpKeyId, pozitionId, rootPitchId } = activeHarpStrata

  const partiallyAppliedHarpKeyNudgeFunction = (direction: 'UP' | 'DOWN') => {
    return nudgeHarpStrataByHarpKey(activeHarpStrata, direction, activeDisplayMode)
  }

  const partiallyAppliedPozitionNudgeFunction = (direction: 'UP' | 'DOWN') => {
    return nudgeHarpStrataByPozition(activeHarpStrata, direction, activeDisplayMode)
  }

  const partiallyAppliedRootPitchNudgeFunction = (direction: 'UP' | 'DOWN') => {
    return nudgeHarpStrataByRootPitch(activeHarpStrata, direction, activeDisplayMode)
  }

  const harpKeyOptionContainerProps = {
    title: 'Harp Key',
    optionId: harpKeyId,
    nudgeFunction: partiallyAppliedHarpKeyNudgeFunction,
    setActiveHarpStrata,
  }

  const pozitionOptionContainerProps = {
    title: 'Position',
    optionId: pozitionId,
    nudgeFunction: partiallyAppliedPozitionNudgeFunction,
    setActiveHarpStrata,
  }

  const rootPitchOptionContainerProps = {
    title: 'Position Key',
    optionId: rootPitchId,
    nudgeFunction: partiallyAppliedRootPitchNudgeFunction,
    setActiveHarpStrata,
  }

  return (
    <View style={styles.wrapper}>
      <OptionContainer {...harpKeyOptionContainerProps}/>
      <OptionContainer {...pozitionOptionContainerProps}/>
      <OptionContainer {...rootPitchOptionContainerProps}/>
    </View>
  )
}
