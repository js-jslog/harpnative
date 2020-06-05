import React from 'react'
import type { ReactElement } from 'react'

import { CovarianceButtonListProps } from '../types'
import { getCovarianceSeries } from '../../CovarianceSeries'
import type { CovariancePrimer } from '../../CovarianceSeries'
import { CovarianceButton } from '../../CovarianceButton'

const getCovarianceButtons = (props: CovarianceButtonListProps): ReadonlyArray<ReactElement> => {
  const { lockedType, lockedValue, variedType, variedValue } = props
  const controlVarsPrimer = { lockedType, lockedValue, variedType, variedValue } as CovariancePrimer

  const covariantsGroupList = getCovarianceSeries({ ...controlVarsPrimer })

  const componentArray = covariantsGroupList.map((covariantsGroup, index) => {
    const covarianceButtonProps = { ...props, ...covariantsGroup }
    return <CovarianceButton key={index} { ...covarianceButtonProps } />
  })

  return componentArray
}

export const CovarianceButtonList = (props: CovarianceButtonListProps): ReactElement => {
  return (
    <>
      {getCovarianceButtons(props)}
    </>
  )
}
