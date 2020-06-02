import React from 'react'
import type { ReactElement } from 'react'

import { getCovariantsGroupList } from '../../CovariantsGroupList'
import type { ControlVarsPrimer } from '../../CovariantsGroupList'
import { CovarianceButton } from '../../CovarianceButton'

import { CovarianceButtonListProps } from './types'

const getCovarianceButtons = (props: CovarianceButtonListProps): ReadonlyArray<ReactElement> => {
  const { lockedType, lockedValue, variedType, variedValue } = props
  const controlVarsPrimer = { lockedType, lockedValue, variedType, variedValue } as ControlVarsPrimer

  const covariantsGroupList = getCovariantsGroupList({ ...controlVarsPrimer })

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
