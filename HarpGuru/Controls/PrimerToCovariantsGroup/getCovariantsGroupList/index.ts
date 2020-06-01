import { getCovariants, CovariantsGroup } from 'harpstrata'

import type { ControlVarsPrimer } from '../types'
import { getControlVarsArray } from '../getControlVarsArray'

export const getCovariantsGroupList = (props: ControlVarsPrimer): ReadonlyArray<CovariantsGroup> => {
  const controlVarsArray = getControlVarsArray(props)
  
  return controlVarsArray.map((controlVars) => {
    return getCovariants(controlVars)
  })
}
