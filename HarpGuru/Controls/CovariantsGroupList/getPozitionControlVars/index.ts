import type { PozitionControlVars } from 'harpstrata'

import type { PozitionControlPrimer } from '../types'
import { CovarianceParts } from '../types'

export const getPozitionControlVars = (props: PozitionControlPrimer): PozitionControlVars => {
  const { lockedType, lockedValue, variedValue } = props

  if ( lockedType === CovarianceParts.RootPitch ) {
    const harpKeyId = variedValue
    const rootPitchId = lockedValue
    const controlVars: PozitionControlVars = { harpKeyId, rootPitchId }
    return controlVars
  } else {
    const harpKeyId = lockedValue
    const rootPitchId = variedValue
    const controlVars: PozitionControlVars = { harpKeyId, rootPitchId }
    return controlVars
  }
}
