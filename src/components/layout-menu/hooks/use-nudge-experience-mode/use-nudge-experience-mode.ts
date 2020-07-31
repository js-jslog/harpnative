import { useGlobal } from 'reactn'

import { nudgeExperienceMode, partiallyApplyNudgeFunction } from '../../utils'

export const useNudgeExperienceMode = (): ((arg0: 'UP' | 'DOWN') => void) => {
  const [activeExperienceMode, setActiveExperienceMode] = useGlobal(
    'activeExperienceMode'
  )

  return partiallyApplyNudgeFunction(nudgeExperienceMode, {
    activeExperienceMode,
    setActiveExperienceMode,
  })
}
