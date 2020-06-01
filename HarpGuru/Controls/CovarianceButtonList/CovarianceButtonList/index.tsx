import React from 'react'
import type { ReactElement } from 'react'
import { PozitionIds, PitchIds } from 'harpstrata'

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

import { getControlVarsList } from '../getControlVarsList'
//import type { ControlVarsPrimer } from '../PrimerToCovariantsGroup'
import { CovarianceButton } from '../CovarianceButton'
import { HarpStrataControlProps } from '../../types'

const getCovarianceButtons = (props: HarpStrataControlProps): ReadonlyArray<ReactElement> => {
  const rootPitchControlPrimer: ControlVarsPrimer = {
    lockedType: CovariantTypes.HarpKey,
    variedType: CovariantTypes.Pozition,
    lockedValue: PitchIds.C,
    variedValue: PozitionIds.First,
  }
  const controlVarsList = getControlVarsList(rootPitchControlPrimer)

  const componentArray = controlVarsList.map((controlVars, index) => {
    const covarianceButtonProps = { ...props, covariantControlVars: controlVars }
    return <CovarianceButton key={index} { ...covarianceButtonProps } />
  })

  return componentArray
}

export const CovarianceButtonList = (props: HarpStrataControlProps): ReactElement => {
  return (
    <>
      {getCovarianceButtons(props)}
    </>
  )
}
