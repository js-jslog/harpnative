import type { HarpKeyControllers, PozitionIds, PitchIds } from 'harpstrata'

import type { HarpKeyControlPrimer } from '../types'
import { CovarianceParts } from '../types'

export const getHarpKeyControlVars = (props: HarpKeyControlPrimer): HarpKeyControllers => {
  const { lockedType, lockedValue, variedValue } = props

  if ( lockedType === CovarianceParts.RootPitch ) {
    const pozitionId = variedValue as PozitionIds
    const rootPitchId = lockedValue as PitchIds
    const controlVars: HarpKeyControllers = { pozitionId, rootPitchId }
    return controlVars
  } else {
    const pozitionId = lockedValue as PozitionIds
    const rootPitchId = variedValue as PitchIds
    const controlVars: HarpKeyControllers = { pozitionId, rootPitchId }
    return controlVars
  }
}
