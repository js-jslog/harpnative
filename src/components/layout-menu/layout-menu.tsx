import { useGlobal } from 'reactn'
import React from 'react'

import { OptionContainer } from '../option'
import { MenuContainer } from '../menu-container'
import { useNudgeDisplayMode } from '../../hooks'

import { useNudgeHarpStrataByApparatus, useNudgeExperienceMode } from './hooks'

export const LayoutMenu = (): React.ReactElement => {
  const [activeHarpStrata] = useGlobal('activeHarpStrata')
  const nudgeHarpStrataByApparatus = useNudgeHarpStrataByApparatus()
  const {
    apparatus: { id: apparatusId },
  } = activeHarpStrata
  const apparatusOptionProps = {
    title: 'Layout',
    optionId: apparatusId,
    nudgeFunction: nudgeHarpStrataByApparatus,
  }

  const [activeExperienceMode] = useGlobal('activeExperienceMode')
  const nudgeExperienceMode = useNudgeExperienceMode()
  const experienceModeOptionProps = {
    title: 'Experience',
    optionId: activeExperienceMode,
    nudgeFunction: nudgeExperienceMode,
  }

  const [activeDisplayMode] = useGlobal('activeDisplayMode')
  const nudgeDisplayMode = useNudgeDisplayMode()
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
