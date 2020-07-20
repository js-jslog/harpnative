import { useGlobal } from 'reactn'

import { ExperienceModes } from '../../../../helpers/setGlobalReactNState'

export const nudgeExperienceMode = (): void => {
  const [activeExperienceMode, setActiveExperienceMode] = useGlobal(
    'experienceMode'
  )

  if (activeExperienceMode === ExperienceModes.Quiz) {
    setActiveExperienceMode(ExperienceModes.Explore)
  } else {
    setActiveExperienceMode(ExperienceModes.Quiz)
  }
}
