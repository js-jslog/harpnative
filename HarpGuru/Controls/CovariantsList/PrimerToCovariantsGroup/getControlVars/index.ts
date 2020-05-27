import type { CovariantControlVars } from 'harpstrata'

import { isPozitionControlPrimer } from '../types'
import type { ControlVarsPrimer, HarpKeyControlPrimer } from '../types'
import { getPozitionControlVars } from '../getPozitionControlVars'
import { getHarpKeyControlVars } from '../getHarpKeyControlVars'

export const getControlVars = (props: ControlVarsPrimer): CovariantControlVars => {
  if (isPozitionControlPrimer(props)) {
    const controlVars = getPozitionControlVars(props)
    return controlVars
  }
  const controlVars = getHarpKeyControlVars(props as HarpKeyControlPrimer)
  return controlVars
}
