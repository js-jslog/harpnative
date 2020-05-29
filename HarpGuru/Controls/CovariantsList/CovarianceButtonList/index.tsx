import React from 'react'
import type { ReactElement } from 'react'
import { PozitionIds, PitchIds } from 'harpstrata'
import type { RootPitchControlVars } from 'harpstrata'

import { CovarianceButton } from '../CovarianceButton'
import { HarpStrataControlProps } from '../../types'

const getCovarianceButtons = (props: HarpStrataControlProps): ReadonlyArray<ReactElement> => {
  const rootPitchControlVars: RootPitchControlVars = {
    harpKeyId: PitchIds.C,
    pozitionId: PozitionIds.First,
  }
  const covarianceButtonProps = { ...props, covariantControlVars: rootPitchControlVars }

  return (
    [ <CovarianceButton key={0} {...covarianceButtonProps} /> ]
  )
}

export const CovarianceButtonList = (props: HarpStrataControlProps): ReactElement => {
  return (
    <>
      {getCovarianceButtons(props)}
    </>
  )
}
