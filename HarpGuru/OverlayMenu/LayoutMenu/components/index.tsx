import React from 'react'
import type { HarpStrata } from 'harpstrata'

import type { LayoutMenuProps } from '../types'
import { nudgeHarpStrataByApparatus } from '../nudgeHarpStrataByApparatus'
import {nudgeDisplayMode} from '../nudgeDisplayMode'
import { OptionContainer } from '../../OptionContainer'
import { MenuContainer} from '../../MenuContainer'
import {DisplayModes} from '../../../HarpFace'

const getPartiallyAppliedLayoutNudgeFunction = (activeHarpStrata: HarpStrata): (direction: 'UP' | 'DOWN') => HarpStrata => {
  return (direction: 'UP' | 'DOWN'): HarpStrata => {
    return nudgeHarpStrataByApparatus(activeHarpStrata, direction)
  }
}

const getPartiallyAppliedDisplayModeNudgeFunction = (activeHarpStrata: HarpStrata, displayMode: DisplayModes, setActiveDisplayMode: (arg0: DisplayModes) => void) => {
  return (): HarpStrata => {
    return nudgeDisplayMode(activeHarpStrata, displayMode, setActiveDisplayMode)
  }
}

export const LayoutMenu = (props: LayoutMenuProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setActiveDisplayMode } = props
  const { apparatus: { id: apparatusId } } = activeHarpStrata

  const layoutOptionContainerProps = {
    title: 'Layout',
    optionId: apparatusId,
    nudgeFunction: getPartiallyAppliedLayoutNudgeFunction(activeHarpStrata),
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
      <OptionContainer {...layoutOptionContainerProps}/>
      <OptionContainer {...displayModeOptionContainerProps}/>
    </MenuContainer>
  )
}
