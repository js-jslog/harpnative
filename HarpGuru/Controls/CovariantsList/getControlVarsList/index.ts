import { PitchIds } from 'harpstrata'
import type { CovariantControlVars } from 'harpstrata'

import { CovariantTypes } from '../types'

type ControlVarsListPrimer = PozitionControlVarsListPrimer

type HarpKeyLockedRootPitchVariable = {
  readonly lockedType: CovariantTypes.HarpKey;
  readonly variableType: CovariantTypes.RootPitch;
  readonly lockedValue: PitchIds;
}
type PozitionControlVarsListPrimer = HarpKeyLockedRootPitchVariable

export const getControlVarsList = (props: ControlVarsListPrimer): ReadonlyArray<CovariantControlVars> => {
  const { lockedValue } = props

  const controlVars: CovariantControlVars = {
    harpKeyId: PitchIds.C,
    rootPitchId: lockedValue,
  }
  return [ controlVars ]
}
