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
