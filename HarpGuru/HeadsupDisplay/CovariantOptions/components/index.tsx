import { StyleSheet, View } from 'react-native'
import React from 'react'
import {HarpStrata} from 'harpstrata'

import type {CovariantOptionsProps} from '../types'
import {nudgeHarpStrataByRootPitch} from '../nudgeHarpStrataByRootPitch'
import {nudgeHarpStrataByPozition} from '../nudgeHarpStrataByPozition'
import {nudgeHarpStrataByHarpKey} from '../nudgeHarpStrataByHarpKey'
import { OptionContainer } from '../../OptionContainer'
import { themeColors } from '../../../Styles'
import {DisplayModes} from '../../../HarpFace'


const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    backgroundColor: themeColors.inertOutline,
    opacity: 0.5,
  }
})

type FullNudgeFunction = (arg0: HarpStrata, arg1: 'UP' | 'DOWN', arg2: DisplayModes) => HarpStrata
type PartiallyAppliedNudgeFunction = (arg0: 'UP' | 'DOWN') => HarpStrata

const partiallyApplyNudgeFunction = (nudgeFunction: FullNudgeFunction, activeHarpStrata: HarpStrata, activeDisplayMode: DisplayModes): PartiallyAppliedNudgeFunction => {
  return (direction: 'UP' | 'DOWN') => {
    return nudgeFunction(activeHarpStrata, direction, activeDisplayMode)
  }
}


export const CovariantOptions = (props: CovariantOptionsProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const { harpKeyId, pozitionId, rootPitchId } = activeHarpStrata

  const harpKeyOptionContainerProps = {
    title: 'Harp Key',
    optionId: harpKeyId,
    nudgeFunction: partiallyApplyNudgeFunction(nudgeHarpStrataByHarpKey, activeHarpStrata, activeDisplayMode),
    setActiveHarpStrata,
  }

  const pozitionOptionContainerProps = {
    title: 'Position',
    optionId: pozitionId,
    nudgeFunction: partiallyApplyNudgeFunction(nudgeHarpStrataByPozition, activeHarpStrata, activeDisplayMode),
    setActiveHarpStrata,
  }

  const rootPitchOptionContainerProps = {
    title: 'Position Key',
    optionId: rootPitchId,
    nudgeFunction: partiallyApplyNudgeFunction(nudgeHarpStrataByRootPitch, activeHarpStrata, activeDisplayMode),
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