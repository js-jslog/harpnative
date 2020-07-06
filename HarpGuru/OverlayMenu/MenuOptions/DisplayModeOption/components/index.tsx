import React from 'react'

import type { DisplayModeOptionProps } from '../types'
import { nudgeDisplayMode } from '../nudgeDisplayMode'
import { OptionContainer } from '../../OptionContainer'
import type { DisplayModes } from '../../../../HarpFace'


const getPartiallyAppliedDisplayModeNudgeFunction = (displayMode: DisplayModes, setActiveDisplayMode: (arg0: DisplayModes) => void) => {
  return (): void => {
    return nudgeDisplayMode(displayMode, setActiveDisplayMode)
  }
}

export const DisplayModeOption = (props: DisplayModeOptionProps): React.ReactElement => {
  const { activeDisplayMode, setActiveDisplayMode } = props

  const displayModeOptionContainerProps = {
    title: 'Display',
    optionId: activeDisplayMode,
    nudgeFunction: getPartiallyAppliedDisplayModeNudgeFunction(activeDisplayMode, setActiveDisplayMode),
  }

  return <OptionContainer {...displayModeOptionContainerProps}/>
}
