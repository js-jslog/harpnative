import { PitchIds, PozitionIds, getPitchIds, getPozitionIds } from 'harpstrata'
import type { CovariantControlVars } from 'harpstrata'

import { getControlVars } from '../../PrimerToCovariantsGroup'
//import type { ControlVarsPrimer } from '../PrimerToCovariantsGroup'

export enum CovariantTypes {
  HarpKey = 'harpKeyId',
  Pozition = 'pozitionId',
  RootPitch = 'rootPitchId',
}

export type PozitionControlPrimerLockedRootPitch = {
  readonly lockedType: CovariantTypes.RootPitch;
  readonly variedType: CovariantTypes.HarpKey;
  readonly lockedValue: PitchIds;
  readonly variedValue: PitchIds;
}
export type PozitionControlPrimerLockedHarpKey = {
  readonly lockedType: CovariantTypes.HarpKey;
  readonly variedType: CovariantTypes.RootPitch;
  readonly lockedValue: PitchIds;
  readonly variedValue: PitchIds;
}
export type PozitionControlPrimer = PozitionControlPrimerLockedRootPitch | PozitionControlPrimerLockedHarpKey

export type HarpKeyControlPrimerLockedRootPitch = {
  readonly lockedType: CovariantTypes.RootPitch;
  readonly variedType: CovariantTypes.Pozition;
  readonly lockedValue: PitchIds;
  readonly variedValue: PozitionIds;
}
export type HarpKeyControlPrimerLockedPozition = {
  readonly lockedType: CovariantTypes.Pozition;
  readonly variedType: CovariantTypes.RootPitch;
  readonly lockedValue: PozitionIds;
  readonly variedValue: PitchIds;
}
export type HarpKeyControlPrimer = HarpKeyControlPrimerLockedRootPitch | HarpKeyControlPrimerLockedPozition

export type RootPitchControlPrimerLockedHarpKey = {
  readonly lockedType: CovariantTypes.HarpKey;
  readonly variedType: CovariantTypes.Pozition;
  readonly lockedValue: PitchIds;
  readonly variedValue: PozitionIds;
}
export type RootPitchControlPrimerLockedPozition = {
  readonly lockedType: CovariantTypes.Pozition;
  readonly variedType: CovariantTypes.HarpKey;
  readonly lockedValue: PozitionIds;
  readonly variedValue: PitchIds;
}
export type RootPitchControlPrimer = RootPitchControlPrimerLockedHarpKey | RootPitchControlPrimerLockedPozition

export type ControlVarsPrimer = PozitionControlPrimer | HarpKeyControlPrimer | RootPitchControlPrimer

export const getControlVarsList = (props: ControlVarsPrimer): ReadonlyArray<CovariantControlVars> => {
  const { variedValue } = props

  if ( Object.keys(PitchIds).includes(variedValue) ) {
    const variedArray = getPitchIds(variedValue as PitchIds)

    const covariantControlVarsList = variedArray.map((variedValue) => {
      const variedPrimer = { ...props, variedValue } as ControlVarsPrimer
      return getControlVars(variedPrimer)
    }) as ReadonlyArray<CovariantControlVars>

    return covariantControlVarsList
  }

  if ( Object.values(PozitionIds).includes(variedValue as PozitionIds) ) {
    const variedArray = getPozitionIds(variedValue as PozitionIds)

    const covariantControlVarsList = variedArray.map((variedValue) => {
      const variedPrimer = { ...props, variedValue } as ControlVarsPrimer
      return getControlVars(variedPrimer)
    }) as ReadonlyArray<CovariantControlVars>

    return covariantControlVarsList
  }

  const errorMessage = `
    Expected variedValue to either be a PitchIds or PozitionIds value on input.

    Input: ${JSON.stringify(props)}

    PitchIds: ${Object.values(PitchIds)}
    PozitionIds: ${Object.values(PozitionIds)}
  `
  throw new Error(errorMessage)
}
