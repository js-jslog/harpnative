import type { CovariantControlVars } from 'harpstrata'

import type { ControlVarsPrimer, HarpKeyControlPrimer } from '../types'
import { getHarpKeyControlVars } from '../getHarpKeyControlVars'

export const getControlVars = (props: ControlVarsPrimer): CovariantControlVars => {
  const controlVars = getHarpKeyControlVars(props as HarpKeyControlPrimer)
  return controlVars
}
