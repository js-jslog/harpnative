import { getCovariantSet, CovariantSet } from 'harpstrata'

import type { ControlVarsPrimer } from '../types'
import { getControlVarsArray } from '../getControlVarsArray'

export const getCovariantsGroupList = (props: ControlVarsPrimer): ReadonlyArray<CovariantSet> => {
  const controlVarsArray = getControlVarsArray(props)
  
  return controlVarsArray.map((controlVars) => {
    return getCovariantSet(controlVars)
  })
}
