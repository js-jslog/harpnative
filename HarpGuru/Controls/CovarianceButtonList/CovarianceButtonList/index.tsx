import React from 'react'
import type { ReactElement } from 'react'
import { PozitionIds, PitchIds } from 'harpstrata'

import { CovariantTypes } from '../types'
import { getControlVarsList } from '../getControlVarsList'
import type { ControlVarsPrimer } from '../PrimerToCovariantsGroup'
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
