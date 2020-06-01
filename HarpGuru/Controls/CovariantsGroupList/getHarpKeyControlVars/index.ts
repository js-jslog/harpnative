import type { HarpKeyControlVars, PozitionIds, PitchIds } from 'harpstrata'

import type { HarpKeyControlPrimer } from '../types'
import { CovariantTypes } from '../types'

export const getHarpKeyControlVars = (props: HarpKeyControlPrimer): HarpKeyControlVars => {
  const { lockedType, lockedValue, variedValue } = props

  if ( lockedType === CovariantTypes.RootPitch ) {
    const pozitionId = variedValue as PozitionIds
    const rootPitchId = lockedValue as PitchIds
    const controlVars: HarpKeyControlVars = { pozitionId, rootPitchId }
    return controlVars
  } else {
    const pozitionId = lockedValue as PozitionIds
    const rootPitchId = variedValue as PitchIds
    const controlVars: HarpKeyControlVars = { pozitionId, rootPitchId }
    return controlVars
  }
}
