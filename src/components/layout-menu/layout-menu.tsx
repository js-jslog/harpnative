import { useGlobal } from 'reactn'
import React from 'react'

import { OptionContainer } from '../option'
import { MenuContainer } from '../menu-container'
import { useNudgeDisplayMode } from '../../hooks'

import { useNudgeExperienceMode, useNudgeHarpStrataByApparatus } from './hooks'

export const LayoutMenu = (): React.ReactElement => {
  const [activeHarpStrata] = useGlobal('activeHarpStrata')
  const [activeExperienceMode] = useGlobal('activeExperienceMode')
  const [activeDisplayMode] = useGlobal('activeDisplayMode')
  const nudgeDisplayMode = useNudgeDisplayMode()
  const nudgeExperienceMode = useNudgeExperienceMode()
  const nudgeHarpStrataByApparatus = useNudgeHarpStrataByApparatus()
  const {
    apparatus: { id: apparatusId },
  } = activeHarpStrata
  const apparatusOptionProps = {
    title: 'Layout',
    optionId: apparatusId,
    nudgeFunction: nudgeHarpStrataByApparatus,
  }
  const experienceModeOptionProps = {
    title: 'Experience',
    optionId: activeExperienceMode,
    nudgeFunction: nudgeExperienceMode,
  }

  const displayModeOptionProps = {
    title: 'Display',
    optionId: activeDisplayMode,
    nudgeFunction: nudgeDisplayMode,
  }

  return (
    <MenuContainer>
      <OptionContainer {...apparatusOptionProps} />
      <OptionContainer {...experienceModeOptionProps} />
      <OptionContainer {...displayModeOptionProps} />
    </MenuContainer>
  )
}
