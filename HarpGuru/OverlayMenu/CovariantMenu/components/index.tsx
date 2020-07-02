import React from 'react'
import {HarpStrata} from 'harpstrata'

import type {CovariantMenuProps} from '../types'
import {nudgeHarpStrataByRootPitch} from '../nudgeHarpStrataByRootPitch'
import {nudgeHarpStrataByHarpKey} from '../nudgeHarpStrataByHarpKey'
import { PozitionOption } from '../../PozitionOption'
import { OptionContainer } from '../../OptionContainer'
import {MenuContainer} from '../../MenuContainer'
import {nudgeDisplayMode} from '../../LayoutMenu/nudgeDisplayMode'
import {DisplayModes} from '../../../HarpFace'


type FullNudgeFunction = (arg0: HarpStrata, arg1: 'UP' | 'DOWN', arg2: DisplayModes) => HarpStrata
type PartiallyAppliedNudgeFunction = (arg0: 'UP' | 'DOWN') => HarpStrata

const partiallyApplyCovariantNudgeFunction = (nudgeFunction: FullNudgeFunction, activeHarpStrata: HarpStrata, activeDisplayMode: DisplayModes): PartiallyAppliedNudgeFunction => {
  return (direction: 'UP' | 'DOWN') => {
    return nudgeFunction(activeHarpStrata, direction, activeDisplayMode)
  }
}

const getPartiallyAppliedDisplayModeNudgeFunction = (activeHarpStrata: HarpStrata, displayMode: DisplayModes, setActiveDisplayMode: (arg0: DisplayModes) => void) => {
  return (): HarpStrata => {
    return nudgeDisplayMode(activeHarpStrata, displayMode, setActiveDisplayMode)
  }
}

export const CovariantMenu = (props: CovariantMenuProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setActiveDisplayMode } = props
  const { harpKeyId, rootPitchId } = activeHarpStrata

  const harpKeyOptionContainerProps = {
    title: 'Harp Key',
    optionId: harpKeyId,
    nudgeFunction: partiallyApplyCovariantNudgeFunction(nudgeHarpStrataByHarpKey, activeHarpStrata, activeDisplayMode),
    setActiveHarpStrata,
  }

  const rootPitchOptionContainerProps = {
    title: 'Position Key',
    optionId: rootPitchId,
    nudgeFunction: partiallyApplyCovariantNudgeFunction(nudgeHarpStrataByRootPitch, activeHarpStrata, activeDisplayMode),
    setActiveHarpStrata,
  }

  const displayModeOptionContainerProps = {
    title: 'Display',
    optionId: activeDisplayMode,
    nudgeFunction: getPartiallyAppliedDisplayModeNudgeFunction(activeHarpStrata, activeDisplayMode, setActiveDisplayMode),
    setActiveHarpStrata,
  }

  return (
    <MenuContainer>
      <OptionContainer {...harpKeyOptionContainerProps}/>
      <PozitionOption {...props}/>
      <OptionContainer {...rootPitchOptionContainerProps}/>
      <OptionContainer {...displayModeOptionContainerProps}/>
    </MenuContainer>
  )
}
