import { useGlobal } from 'reactn'
import React from 'react'

import { nudgeExperienceMode } from '../nudgeExperienceMode'
import { OptionContainer } from '../../OptionContainer'

export const ExperienceModeOption = (): React.ReactElement => {
  const [activeExperienceMode] = useGlobal('activeExperienceMode')
  const experienceModeOptionProps = {
    title: 'Experience',
    optionId: activeExperienceMode,
    nudgeFunction: nudgeExperienceMode,
  }

  return <OptionContainer {...experienceModeOptionProps} />
}
