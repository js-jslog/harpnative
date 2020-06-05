import type { RootPitchControllers, PitchIds, PozitionIds } from 'harpstrata'

import type { RootPitchControlPrimer } from '../types'
import { CovarianceParts } from '../types'

export const getRootPitchControlVars = (props: RootPitchControlPrimer): RootPitchControllers => {
  const { lockedType, lockedValue, variedValue } = props

  if ( lockedType === CovarianceParts.Pozition ) {
    const harpKeyId = variedValue as PitchIds
    const pozitionId = lockedValue as PozitionIds
    const controlVars: RootPitchControllers = { harpKeyId, pozitionId }
    return controlVars
  } else {
    const harpKeyId = lockedValue as PitchIds
    const pozitionId = variedValue as PozitionIds
    const controlVars: RootPitchControllers = { harpKeyId, pozitionId }
    return controlVars
  }
}
