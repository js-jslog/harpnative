import { useGlobal } from 'reactn'
import React from 'react'

import { OptionContainer } from '../option'
import { MenuContainer } from '../menu-container'

import {
  nudgeHarpStrataByApparatus,
  nudgeExperienceMode,
  nudgeDisplayMode,
  partiallyApplyNudgeFunction,
} from './utils'

export const LayoutMenu = (): React.ReactElement => {
  const [activeHarpStrata, setActiveHarpStrata] = useGlobal('activeHarpStrata')
  const [activeExperienceMode, setActiveExperienceMode] = useGlobal(
    'activeExperienceMode'
  )
  const [activeDisplayMode, setActiveDisplayMode] = useGlobal(
    'activeDisplayMode'
  )
  const {
    apparatus: { id: apparatusId },
  } = activeHarpStrata
  const apparatusPartialParams = {
    activeHarpStrata,
    setActiveHarpStrata,
  }
  const apparatusOptionProps = {
    title: 'Layout',
    optionId: apparatusId,
    nudgeFunction: partiallyApplyNudgeFunction(
      nudgeHarpStrataByApparatus,
      apparatusPartialParams
    ),
  }
  const experienceModPartialParams = {
    activeExperienceMode,
    setActiveExperienceMode,
  }
  const experienceModeOptionProps = {
    title: 'Experience',
    optionId: activeExperienceMode,
    nudgeFunction: partiallyApplyNudgeFunction(
      nudgeExperienceMode,
      experienceModPartialParams
    ),
  }
  const displayModePartialParams = {
    activeDisplayMode,
    setActiveDisplayMode,
  }

  const displayModeOptionProps = {
    title: 'Display',
    optionId: activeDisplayMode,
    nudgeFunction: partiallyApplyNudgeFunction(
      nudgeDisplayMode,
      displayModePartialParams
    ),
  }

  return (
    <MenuContainer>
      <OptionContainer {...apparatusOptionProps} />
      <OptionContainer {...experienceModeOptionProps} />
      <OptionContainer {...displayModeOptionProps} />
    </MenuContainer>
  )
}
