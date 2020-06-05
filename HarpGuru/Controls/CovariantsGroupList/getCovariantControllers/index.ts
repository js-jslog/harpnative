import type { CovariantControllers } from 'harpstrata'

import { isRootPitchCovariancePrimer, isHarpKeyCovariancePrimer, isPozitionCovariancePrimer } from '../types'
import type { CovariancePrimer } from '../types'
import { getRootPitchControllers } from '../getRootPitchControlVars'
import { getPozitionControllers } from '../getPozitionControlVars'
import { getHarpKeyControllers } from '../getHarpKeyControlVars'

export const getCovariantControllers = (props: CovariancePrimer): CovariantControllers => {
  if (isHarpKeyCovariancePrimer(props)) {
    const controlVars = getHarpKeyControllers(props)
    return controlVars
  } else if (isPozitionCovariancePrimer(props)) {
    const controlVars = getPozitionControllers(props)
    return controlVars
  } else if (isRootPitchCovariancePrimer(props)) {
    const controlVars = getRootPitchControllers(props)
    return controlVars
  }

  const errorMessage = `
    Input args did not meet control variable primer expectations.

    Input: ${JSON.stringify(props)}

    Two of the CovarianceParts properties need to be defined as lockedType and variedType.
  `
  throw new Error(errorMessage)
}
