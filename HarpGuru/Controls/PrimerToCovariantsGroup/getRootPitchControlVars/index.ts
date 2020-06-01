import type { RootPitchControlVars, PitchIds, PozitionIds } from 'harpstrata'

import type { RootPitchControlPrimer } from '../types'
import { CovariantTypes } from '../types'

export const getRootPitchControlVars = (props: RootPitchControlPrimer): RootPitchControlVars => {
  const { lockedType, lockedValue, variedValue } = props

  if ( lockedType === CovariantTypes.Pozition ) {
    const harpKeyId = variedValue as PitchIds
    const pozitionId = lockedValue as PozitionIds
    const controlVars: RootPitchControlVars = { harpKeyId, pozitionId }
    return controlVars
  } else {
    const harpKeyId = lockedValue as PitchIds
    const pozitionId = variedValue as PozitionIds
    const controlVars: RootPitchControlVars = { harpKeyId, pozitionId }
    return controlVars
  }
}
