import type { PozitionControllers } from 'harpstrata'

import type { PozitionControlPrimer } from '../types'
import { CovarianceParts } from '../types'

export const getPozitionControlVars = (props: PozitionControlPrimer): PozitionControllers => {
  const { lockedType, lockedValue, variedValue } = props

  if ( lockedType === CovarianceParts.RootPitch ) {
    const harpKeyId = variedValue
    const rootPitchId = lockedValue
    const controlVars: PozitionControllers = { harpKeyId, rootPitchId }
    return controlVars
  } else {
    const harpKeyId = lockedValue
    const rootPitchId = variedValue
    const controlVars: PozitionControllers = { harpKeyId, rootPitchId }
    return controlVars
  }
}
