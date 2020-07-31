import { useGlobal } from 'reactn'

import { nudgeDisplayMode, partiallyApplyNudgeFunction } from '../../utils'

export const useNudgeDisplayMode = (): ((arg0: 'UP' | 'DOWN') => void) => {
  const [activeDisplayMode, setActiveDisplayMode] = useGlobal(
    'activeDisplayMode'
  )

  return partiallyApplyNudgeFunction(nudgeDisplayMode, {
    activeDisplayMode,
    setActiveDisplayMode,
  })
}
