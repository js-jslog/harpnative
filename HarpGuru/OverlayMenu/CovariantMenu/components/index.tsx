import React from 'react'
import {HarpStrata} from 'harpstrata'

import type {CovariantMenuProps} from '../types'
import { RootPitchOption } from '../../RootPitchOption'
import { PozitionOption } from '../../PozitionOption'
import { OptionContainer } from '../../OptionContainer'
import {MenuContainer} from '../../MenuContainer'
import {nudgeDisplayMode} from '../../LayoutMenu/nudgeDisplayMode'
import { HarpKeyOption } from '../../HarpKeyOption'
import {DisplayModes} from '../../../HarpFace'


const getPartiallyAppliedDisplayModeNudgeFunction = (activeHarpStrata: HarpStrata, displayMode: DisplayModes, setActiveDisplayMode: (arg0: DisplayModes) => void) => {
  return (): HarpStrata => {
    return nudgeDisplayMode(activeHarpStrata, displayMode, setActiveDisplayMode)
  }
}

export const CovariantMenu = (props: CovariantMenuProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setActiveDisplayMode } = props

  const displayModeOptionContainerProps = {
    title: 'Display',
    optionId: activeDisplayMode,
    nudgeFunction: getPartiallyAppliedDisplayModeNudgeFunction(activeHarpStrata, activeDisplayMode, setActiveDisplayMode),
    setActiveHarpStrata,
  }

  return (
    <MenuContainer>
      <HarpKeyOption {...props} />
      <PozitionOption {...props} />
      <RootPitchOption {...props} />
      <OptionContainer {...displayModeOptionContainerProps}/>
    </MenuContainer>
  )
}
