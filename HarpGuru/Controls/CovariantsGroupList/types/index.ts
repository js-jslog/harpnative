import type { PitchIds, PozitionIds } from 'harpstrata'

export enum CovarianceParts {
  HarpKey = 'harpKeyId',
  Pozition = 'pozitionId',
  RootPitch = 'rootPitchId',
}

export type PozitionControlPrimerLockedRootPitch = {
  readonly lockedType: CovarianceParts.RootPitch;
  readonly variedType: CovarianceParts.HarpKey;
  readonly lockedValue: PitchIds;
  readonly variedValue: PitchIds;
}
export type PozitionControlPrimerLockedHarpKey = {
  readonly lockedType: CovarianceParts.HarpKey;
  readonly variedType: CovarianceParts.RootPitch;
  readonly lockedValue: PitchIds;
  readonly variedValue: PitchIds;
}
export type PozitionControlPrimer = PozitionControlPrimerLockedRootPitch | PozitionControlPrimerLockedHarpKey

export type HarpKeyControlPrimerLockedRootPitch = {
  readonly lockedType: CovarianceParts.RootPitch;
  readonly variedType: CovarianceParts.Pozition;
  readonly lockedValue: PitchIds;
  readonly variedValue: PozitionIds;
}
export type HarpKeyControlPrimerLockedPozition = {
  readonly lockedType: CovarianceParts.Pozition;
  readonly variedType: CovarianceParts.RootPitch;
  readonly lockedValue: PozitionIds;
  readonly variedValue: PitchIds;
}
export type HarpKeyControlPrimer = HarpKeyControlPrimerLockedRootPitch | HarpKeyControlPrimerLockedPozition

export type RootPitchControlPrimerLockedHarpKey = {
  readonly lockedType: CovarianceParts.HarpKey;
  readonly variedType: CovarianceParts.Pozition;
  readonly lockedValue: PitchIds;
  readonly variedValue: PozitionIds;
}
export type RootPitchControlPrimerLockedPozition = {
  readonly lockedType: CovarianceParts.Pozition;
  readonly variedType: CovarianceParts.HarpKey;
  readonly lockedValue: PozitionIds;
  readonly variedValue: PitchIds;
}
export type RootPitchControlPrimer = RootPitchControlPrimerLockedHarpKey | RootPitchControlPrimerLockedPozition

export type CovariancePrimer = PozitionControlPrimer | HarpKeyControlPrimer | RootPitchControlPrimer

const containsSpecificCovarianceParts = (controlVarsPrimer: CovariancePrimer, covariantTypeOne: CovarianceParts, covariantTypeTwo: CovarianceParts): boolean => {
  const { lockedType, variedType } = controlVarsPrimer
  
  const oneWay = (lockedType === covariantTypeOne && variedType === covariantTypeTwo)
  const theOther = (lockedType === covariantTypeTwo && variedType === covariantTypeOne)

  return oneWay || theOther
}

export const isHarpKeyControlPrimer = (props: CovariancePrimer): props is HarpKeyControlPrimer => {
  const { Pozition, RootPitch } = CovarianceParts

  return containsSpecificCovarianceParts(props, Pozition, RootPitch)
}

export const isPozitionControlPrimer = (props: CovariancePrimer): props is PozitionControlPrimer => {
  const { HarpKey, RootPitch } = CovarianceParts

  return containsSpecificCovarianceParts(props, HarpKey, RootPitch)
}

export const isRootPitchControlPrimer = (props: CovariancePrimer): props is RootPitchControlPrimer => {
  const { HarpKey, Pozition } = CovarianceParts

  return containsSpecificCovarianceParts(props, HarpKey, Pozition)
}
