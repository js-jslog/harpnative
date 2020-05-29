import type { PitchIds, PozitionIds } from 'harpstrata'

import { CovariantTypes } from '../../types'

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

const containsSpecificCovariantTypes = (controlVarsPrimer: ControlVarsPrimer, covariantTypeOne: CovariantTypes, covariantTypeTwo: CovariantTypes): boolean => {
  const { lockedType, variedType } = controlVarsPrimer
  
  const oneWay = (lockedType === covariantTypeOne && variedType === covariantTypeTwo)
  const theOther = (lockedType === covariantTypeTwo && variedType === covariantTypeOne)

  return oneWay || theOther
}

export const isHarpKeyControlPrimer = (props: ControlVarsPrimer): props is HarpKeyControlPrimer => {
  const { Pozition, RootPitch } = CovariantTypes

  return containsSpecificCovariantTypes(props, Pozition, RootPitch)
}

export const isPozitionControlPrimer = (props: ControlVarsPrimer): props is PozitionControlPrimer => {
  const { HarpKey, RootPitch } = CovariantTypes

  return containsSpecificCovariantTypes(props, HarpKey, RootPitch)
}

export const isRootPitchControlPrimer = (props: ControlVarsPrimer): props is RootPitchControlPrimer => {
  const { HarpKey, Pozition } = CovariantTypes

  return containsSpecificCovariantTypes(props, HarpKey, Pozition)
}
