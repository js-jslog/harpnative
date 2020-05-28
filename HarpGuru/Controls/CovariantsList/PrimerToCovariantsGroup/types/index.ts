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
export type HarpKeyControlPrimerLockedHarpKey = {
  readonly lockedType: CovariantTypes.Pozition;
  readonly variedType: CovariantTypes.RootPitch;
  readonly lockedValue: PozitionIds;
  readonly variedValue: PitchIds;
}
export type HarpKeyControlPrimer = HarpKeyControlPrimerLockedRootPitch | HarpKeyControlPrimerLockedHarpKey

export type ControlVarsPrimer = PozitionControlPrimer | HarpKeyControlPrimer

export const isHarpKeyControlPrimer = (props: ControlVarsPrimer): props is HarpKeyControlPrimer => {
  const { lockedType, variedType } = props
  const { Pozition, RootPitch } = CovariantTypes

  const oneWay = (lockedType === Pozition && variedType === RootPitch)
  const theOther = (lockedType === RootPitch && variedType === Pozition)

  return oneWay || theOther
}

export const isPozitionControlPrimer = (props: ControlVarsPrimer): props is PozitionControlPrimer => {
  const { lockedType, variedType } = props
  const { HarpKey, RootPitch } = CovariantTypes

  const oneWay = (lockedType === HarpKey && variedType === RootPitch)
  const theOther = (lockedType === RootPitch && variedType === HarpKey)

  return oneWay || theOther
}
