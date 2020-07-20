import { useGlobal } from 'reactn'
import React from 'react'

import { nudgeExperienceMode } from '../nudgeExperienceMode'
import { OptionContainer } from '../../OptionContainer'


export const ExperienceModeOption = (): React.ReactElement => {

  const [experienceMode] = useGlobal('experienceMode')
  const experienceModeOptionProps = {
    title: 'Experience',
    optionId: experienceMode,
    nudgeFunction: nudgeExperienceMode,
  }

  return <OptionContainer {...experienceModeOptionProps} />
}
