import type { CovariantControllers } from 'harpstrata'

import { isRootPitchControlPrimer, isHarpKeyControlPrimer, isPozitionControlPrimer } from '../types'
import type { ControlVarsPrimer } from '../types'
import { getRootPitchControlVars } from '../getRootPitchControlVars'
import { getPozitionControlVars } from '../getPozitionControlVars'
import { getHarpKeyControlVars } from '../getHarpKeyControlVars'

export const getControlVars = (props: ControlVarsPrimer): CovariantControllers => {
  if (isHarpKeyControlPrimer(props)) {
    const controlVars = getHarpKeyControlVars(props)
    return controlVars
  } else if (isPozitionControlPrimer(props)) {
    const controlVars = getPozitionControlVars(props)
    return controlVars
  } else if (isRootPitchControlPrimer(props)) {
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
