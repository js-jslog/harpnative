import { PitchIds } from 'harpstrata'
import type { CovariantControlVars } from 'harpstrata'

import { CovariantTypes } from '../types'

type ControlVarsListPrimer = {
  readonly lockedType: CovariantTypes;
  readonly lockedValue: PitchIds;
  readonly variableType: CovariantTypes;
}

export const getControlVarsList = (props: ControlVarsListPrimer): ReadonlyArray<CovariantControlVars> => {
  const { lockedValue } = props

  const controlVars: CovariantControlVars = {
    harpKeyId: PitchIds.C,
    rootPitchId: lockedValue,
  }
  return [ controlVars ]
}
