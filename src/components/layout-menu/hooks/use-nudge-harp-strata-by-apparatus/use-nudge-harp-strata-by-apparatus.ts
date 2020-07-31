import { useGlobal } from 'reactn'

import {
  nudgeHarpStrataByApparatus,
  partiallyApplyNudgeFunction,
} from '../../utils'

export const useNudgeHarpStrataByApparatus = (): ((
  arg0: 'UP' | 'DOWN'
) => void) => {
  const [activeHarpStrata, setActiveHarpStrata] = useGlobal('activeHarpStrata')

  return partiallyApplyNudgeFunction(nudgeHarpStrataByApparatus, {
    activeHarpStrata,
    setActiveHarpStrata,
  })
}
