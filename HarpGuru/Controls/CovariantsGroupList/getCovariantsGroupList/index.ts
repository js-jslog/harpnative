import { getCovariantSet, CovariantSet } from 'harpstrata'

import type { CovariancePrimer } from '../types'
import { getControlVarsArray } from '../getControlVarsArray'

export const getCovariantsGroupList = (props: CovariancePrimer): ReadonlyArray<CovariantSet> => {
  const controlVarsArray = getControlVarsArray(props)
  
  return controlVarsArray.map((controlVars) => {
    return getCovariantSet(controlVars)
  })
}
