import { getCovariants, CovariantsGroup } from 'harpstrata'

import type { ControlVarsPrimer } from '../types'
import { getControlVars } from '../getControlVars'

export const getCovariantsGroupList = (props: ControlVarsPrimer): ReadonlyArray<CovariantsGroup> => {
  const controlVars = getControlVars(props)
  const covariantsGroup = getCovariants(controlVars)

  return [covariantsGroup]
}
