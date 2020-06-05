import type { PitchIds, PozitionIds } from 'harpstrata'

export enum CovariantMembers {
  HarpKey = 'harpKeyId',
  Pozition = 'pozitionId',
  RootPitch = 'rootPitchId',
}

export type PozitionByHarpKeyAtRootPitchPrimer = {
  readonly lockedType: CovariantMembers.RootPitch;
  readonly variedType: CovariantMembers.HarpKey;
  readonly lockedValue: PitchIds;
  readonly variedValue: PitchIds;
}
export type PozitionByRootPitchAtHarpKeyPrimer = {
  readonly lockedType: CovariantMembers.HarpKey;
  readonly variedType: CovariantMembers.RootPitch;
  readonly lockedValue: PitchIds;
  readonly variedValue: PitchIds;
}
export type PozitionCovariancePrimer = PozitionByHarpKeyAtRootPitchPrimer | PozitionByRootPitchAtHarpKeyPrimer

export type HarpKeyByPozitionAtRootPitchPrimer = {
  readonly lockedType: CovariantMembers.RootPitch;
  readonly variedType: CovariantMembers.Pozition;
  readonly lockedValue: PitchIds;
  readonly variedValue: PozitionIds;
}
export type HarpKeyByRootPitchAtPozitionPrimer = {
  readonly lockedType: CovariantMembers.Pozition;
  readonly variedType: CovariantMembers.RootPitch;
  readonly lockedValue: PozitionIds;
  readonly variedValue: PitchIds;
}
export type HarpKeyCovariancePrimer = HarpKeyByPozitionAtRootPitchPrimer | HarpKeyByRootPitchAtPozitionPrimer

export type RootPitchByPozitionAtHarpKeyPrimer = {
  readonly lockedType: CovariantMembers.HarpKey;
  readonly variedType: CovariantMembers.Pozition;
  readonly lockedValue: PitchIds;
  readonly variedValue: PozitionIds;
}
export type RootPitchByHarpKeyAtPozitionPrimer = {
  readonly lockedType: CovariantMembers.Pozition;
  readonly variedType: CovariantMembers.HarpKey;
  readonly lockedValue: PozitionIds;
  readonly variedValue: PitchIds;
}
export type RootPitchCovariancePrimer = RootPitchByPozitionAtHarpKeyPrimer | RootPitchByHarpKeyAtPozitionPrimer

export type CovariancePrimer = PozitionCovariancePrimer | HarpKeyCovariancePrimer | RootPitchCovariancePrimer

const containsSpecificCovariantMembers = (covariancePrimer: CovariancePrimer, covariantMemberOne: CovariantMembers, covariantMemberTwo: CovariantMembers): boolean => {
  const { lockedType, variedType } = covariancePrimer
  
  const oneWay = (lockedType === covariantMemberOne && variedType === covariantMemberTwo)
  const theOther = (lockedType === covariantMemberTwo && variedType === covariantMemberOne)

  return oneWay || theOther
}

export const isHarpKeyCovariancePrimer = (props: CovariancePrimer): props is HarpKeyCovariancePrimer => {
  const { Pozition, RootPitch } = CovariantMembers

  return containsSpecificCovariantMembers(props, Pozition, RootPitch)
}

export const isPozitionCovariancePrimer = (props: CovariancePrimer): props is PozitionCovariancePrimer => {
  const { HarpKey, RootPitch } = CovariantMembers

  return containsSpecificCovariantMembers(props, HarpKey, RootPitch)
}

export const isRootPitchCovariancePrimer = (props: CovariancePrimer): props is RootPitchCovariancePrimer => {
  const { HarpKey, Pozition } = CovariantMembers

  return containsSpecificCovariantMembers(props, HarpKey, Pozition)
}
