import type { PozitionControllers } from 'harpstrata'

import type { PozitionCovariancePrimer } from '../types'
import { CovarianceParts } from '../types'

export const getPozitionControllers = (props: PozitionCovariancePrimer): PozitionControllers => {
  const { lockedType, lockedValue, variedValue } = props

  if ( lockedType === CovarianceParts.RootPitch ) {
    const harpKeyId = variedValue
    const rootPitchId = lockedValue
    const pozitionControllers: PozitionControllers = { harpKeyId, rootPitchId }
    return pozitionControllers
  } else {
    const harpKeyId = lockedValue
    const rootPitchId = variedValue
    const pozitionControllers: PozitionControllers = { harpKeyId, rootPitchId }
    return pozitionControllers
  }
}
