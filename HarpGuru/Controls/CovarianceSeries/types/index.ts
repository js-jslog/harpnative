import type { PitchIds, PozitionIds } from 'harpstrata'

export enum CovarianceParts {
  HarpKey = 'harpKeyId',
  Pozition = 'pozitionId',
  RootPitch = 'rootPitchId',
}

export type PozitionByHarpKeyAtRootPitchPrimer = {
  readonly lockedType: CovarianceParts.RootPitch;
  readonly variedType: CovarianceParts.HarpKey;
  readonly lockedValue: PitchIds;
  readonly variedValue: PitchIds;
}
export type PozitionByRootPitchAtHarpKeyPrimer = {
  readonly lockedType: CovarianceParts.HarpKey;
  readonly variedType: CovarianceParts.RootPitch;
  readonly lockedValue: PitchIds;
  readonly variedValue: PitchIds;
}
export type PozitionCovariancePrimer = PozitionByHarpKeyAtRootPitchPrimer | PozitionByRootPitchAtHarpKeyPrimer

export type HarpKeyByPozitionAtRootPitchPrimer = {
  readonly lockedType: CovarianceParts.RootPitch;
  readonly variedType: CovarianceParts.Pozition;
  readonly lockedValue: PitchIds;
  readonly variedValue: PozitionIds;
}
export type HarpKeyByRootPitchAtPozitionPrimer = {
  readonly lockedType: CovarianceParts.Pozition;
  readonly variedType: CovarianceParts.RootPitch;
  readonly lockedValue: PozitionIds;
  readonly variedValue: PitchIds;
}
export type HarpKeyCovariancePrimer = HarpKeyByPozitionAtRootPitchPrimer | HarpKeyByRootPitchAtPozitionPrimer

export type RootPitchByPozitionAtHarpKeyPrimer = {
  readonly lockedType: CovarianceParts.HarpKey;
  readonly variedType: CovarianceParts.Pozition;
  readonly lockedValue: PitchIds;
  readonly variedValue: PozitionIds;
}
export type RootPitchByHarpKeyAtPozitionPrimer = {
  readonly lockedType: CovarianceParts.Pozition;
  readonly variedType: CovarianceParts.HarpKey;
  readonly lockedValue: PozitionIds;
  readonly variedValue: PitchIds;
}
export type RootPitchCovariancePrimer = RootPitchByPozitionAtHarpKeyPrimer | RootPitchByHarpKeyAtPozitionPrimer

export type CovariancePrimer = PozitionCovariancePrimer | HarpKeyCovariancePrimer | RootPitchCovariancePrimer

const containsSpecificCovarianceParts = (controlVarsPrimer: CovariancePrimer, covariantTypeOne: CovarianceParts, covariantTypeTwo: CovarianceParts): boolean => {
  const { lockedType, variedType } = controlVarsPrimer
  
  const oneWay = (lockedType === covariantTypeOne && variedType === covariantTypeTwo)
  const theOther = (lockedType === covariantTypeTwo && variedType === covariantTypeOne)

  return oneWay || theOther
}

export const isHarpKeyCovariancePrimer = (props: CovariancePrimer): props is HarpKeyCovariancePrimer => {
  const { Pozition, RootPitch } = CovarianceParts

  return containsSpecificCovarianceParts(props, Pozition, RootPitch)
}

export const isPozitionCovariancePrimer = (props: CovariancePrimer): props is PozitionCovariancePrimer => {
  const { HarpKey, RootPitch } = CovarianceParts

  return containsSpecificCovarianceParts(props, HarpKey, RootPitch)
}

export const isRootPitchCovariancePrimer = (props: CovariancePrimer): props is RootPitchCovariancePrimer => {
  const { HarpKey, Pozition } = CovarianceParts

  return containsSpecificCovarianceParts(props, HarpKey, Pozition)
}
