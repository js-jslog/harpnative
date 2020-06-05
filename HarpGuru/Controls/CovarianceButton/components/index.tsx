import { Button } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { getHarpStrata } from 'harpstrata'
import type { HarpStrataProps } from 'harpstrata'

import { CovarianceButtonProps } from '../types'
import { CovarianceParts } from '../../CovarianceSeries'

const getButtonTitle = (props: CovarianceButtonProps): string => {
  const { lockedType, variedType } = props
  const { harpKeyId, pozitionId, rootPitchId } = props
  if ( lockedType === CovarianceParts.RootPitch && variedType === CovarianceParts.HarpKey ) {
    return `${harpKeyId} ${pozitionId}`
  } else if ( lockedType === CovarianceParts.RootPitch && variedType === CovarianceParts.Pozition ) {
    return `${pozitionId} ${harpKeyId}`
  } else if ( lockedType === CovarianceParts.HarpKey && variedType === CovarianceParts.RootPitch ) {
    return `${rootPitchId} ${pozitionId}`
  } else if ( lockedType === CovarianceParts.HarpKey && variedType === CovarianceParts.Pozition ) {
    return `${pozitionId} ${rootPitchId}`
  } else if ( lockedType === CovarianceParts.Pozition && variedType === CovarianceParts.HarpKey ) {
    return `${harpKeyId} ${rootPitchId}`
  } else if ( lockedType === CovarianceParts.Pozition && variedType === CovarianceParts.RootPitch ) {
    return `${rootPitchId} ${harpKeyId}`
  }

  const errorMessage = `
    Expected lockedType and variedType to constitute a covariant controling pair but didn't.

    ${JSON.stringify(props, undefined, 2)}
  `
  throw new Error(errorMessage)
}

const getNewHarpStrata = (props: CovarianceButtonProps): void => {
  const { setActiveHarpStrata } = props
  const { harpKeyId, pozitionId } = props
  const { activeHarpStrata: { apparatus: { id: apparatusId }, isActiveComplex: { activeDegreeIds: activeIds }}} = props
  const harpStrataProps: HarpStrataProps = {
    apparatusId, harpKeyId, pozitionId, activeIds
  }
  const newHarpStrata = getHarpStrata(harpStrataProps)

  setActiveHarpStrata(newHarpStrata)
}

export const CovarianceButton = (props: CovarianceButtonProps): ReactElement => {
  const title = getButtonTitle(props)

  return (
    <Button onPress={(): void => getNewHarpStrata(props)} title={title} />
  )
}
