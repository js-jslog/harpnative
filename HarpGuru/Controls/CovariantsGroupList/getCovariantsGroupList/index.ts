import { getCovariantSet, CovariantSet } from 'harpstrata'

import type { CovariancePrimer } from '../types'
import { getSeriesControllers } from '../getControlVarsArray'

export const getCovariantsGroupList = (props: CovariancePrimer): ReadonlyArray<CovariantSet> => {
  const controlVarsArray = getSeriesControllers(props)
  
  return controlVarsArray.map((controlVars) => {
    return getCovariantSet(controlVars)
  })
}
