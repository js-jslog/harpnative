import type { PitchIds, PozitionIds } from 'harpstrata'

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

export type ControlVarsPrimer = PozitionControlPrimer | HarpKeyControlPrimer

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
