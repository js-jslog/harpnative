import React from 'react'
import {HarpStrata} from 'harpstrata'

import { nudgeDisplayMode } from '../nudgeDisplayMode'
import { OptionContainer } from '../../OptionContainer'
import type { MenuProps } from '../../../types'
import type { DisplayModes } from '../../../../HarpFace'


const getPartiallyAppliedDisplayModeNudgeFunction = (activeHarpStrata: HarpStrata, displayMode: DisplayModes, setActiveDisplayMode: (arg0: DisplayModes) => void) => {
  return (): HarpStrata => {
    return nudgeDisplayMode(activeHarpStrata, displayMode, setActiveDisplayMode)
  }
}

export const DisplayModeOption = (props: MenuProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setActiveDisplayMode } = props

  const rootPitchOptionContainerProps = {
    title: 'Display',
    optionId: activeDisplayMode,
    nudgeFunction: getPartiallyAppliedDisplayModeNudgeFunction(activeHarpStrata, activeDisplayMode, setActiveDisplayMode),
    setActiveHarpStrata,
  }

  return <OptionContainer {...rootPitchOptionContainerProps}/>
}
