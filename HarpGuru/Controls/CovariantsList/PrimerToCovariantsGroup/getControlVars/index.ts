import type { CovariantControlVars } from 'harpstrata'

import { isHarpKeyControlPrimer, isPozitionControlPrimer } from '../types'
import type { ControlVarsPrimer } from '../types'
import { getPozitionControlVars } from '../getPozitionControlVars'
import { getHarpKeyControlVars } from '../getHarpKeyControlVars'

export const getControlVars = (props: ControlVarsPrimer): CovariantControlVars => {
  if (isHarpKeyControlPrimer(props)) {
    const controlVars = getHarpKeyControlVars(props)
    return controlVars
  } else if (isPozitionControlPrimer(props)) {
    const controlVars = getPozitionControlVars(props)
    return controlVars
  }

  const errorMessage = `
    Input args did not meet control variable primer expectations.

    Input: ${JSON.stringify(props)}

    Two of the CovariantTypes properties need to be defined as lockedType and variedType.
  `
  throw new Error(errorMessage)
}
