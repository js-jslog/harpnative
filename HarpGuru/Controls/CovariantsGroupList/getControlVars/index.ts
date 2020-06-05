import type { CovariantControllers } from 'harpstrata'

import { isRootPitchCovariancePrimer, isHarpKeyCovariancePrimer, isPozitionCovariancePrimer } from '../types'
import type { CovariancePrimer } from '../types'
import { getRootPitchControlVars } from '../getRootPitchControlVars'
import { getPozitionControlVars } from '../getPozitionControlVars'
import { getHarpKeyControlVars } from '../getHarpKeyControlVars'

export const getControlVars = (props: CovariancePrimer): CovariantControllers => {
  if (isHarpKeyCovariancePrimer(props)) {
    const controlVars = getHarpKeyControlVars(props)
    return controlVars
  } else if (isPozitionCovariancePrimer(props)) {
    const controlVars = getPozitionControlVars(props)
    return controlVars
  } else if (isRootPitchCovariancePrimer(props)) {
    const controlVars = getRootPitchControlVars(props)
    return controlVars
  }

  const errorMessage = `
    Input args did not meet control variable primer expectations.

    Input: ${JSON.stringify(props)}

    Two of the CovarianceParts properties need to be defined as lockedType and variedType.
  `
  throw new Error(errorMessage)
}
