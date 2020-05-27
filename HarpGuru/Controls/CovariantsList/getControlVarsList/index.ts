import { PitchIds } from 'harpstrata'
import type { CovariantControlVars } from 'harpstrata'

import { CovariantTypes } from '../types'

type ControlVarsListPrimer = PozitionControlVarsListPrimer

type HarpKeyLockedRootPitchVariable = {
  readonly lockedType: CovariantTypes.HarpKey;
  readonly variableType: CovariantTypes.RootPitch;
  readonly lockedValue: PitchIds;
}
type RootPitchLockedHarpKeyVariable = {
  readonly lockedType: CovariantTypes.RootPitch;
  readonly variableType: CovariantTypes.HarpKey;
  readonly lockedValue: PitchIds;
}
type PozitionControlVarsListPrimer = HarpKeyLockedRootPitchVariable | RootPitchLockedHarpKeyVariable

export const getControlVarsList = (props: ControlVarsListPrimer): ReadonlyArray<CovariantControlVars> => {
  const { lockedValue, lockedType } = props

  if ( lockedType === CovariantTypes.RootPitch ) {
    const controlVars: CovariantControlVars = {
      harpKeyId: PitchIds.C,
      rootPitchId: lockedValue,
    }
    return [ controlVars ]
  } else {
    const controlVars: CovariantControlVars = {
      harpKeyId: lockedValue,
      rootPitchId: PitchIds.C,
    }
    return [ controlVars ]
  }
}