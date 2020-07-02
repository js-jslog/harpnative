import React from 'react'
import {HarpStrata} from 'harpstrata'

import type {CovariantMenuProps} from '../types'
import { OptionContainer } from '../../MenuOptions/OptionContainer'
import { HarpKeyOption, RootPitchOption, PozitionOption } from '../../MenuOptions'
import {MenuContainer} from '../../MenuContainer'
import {nudgeDisplayMode} from '../../LayoutMenu/nudgeDisplayMode'
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
