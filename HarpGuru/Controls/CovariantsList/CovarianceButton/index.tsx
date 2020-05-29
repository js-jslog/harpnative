import { Button } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import type { CovariantControlVars, HarpKeyControlVars, PozitionControlVars, RootPitchControlVars } from 'harpstrata'

import { CovarianceButtonProps } from './types'

const isHarpKeyControlVars = (props: CovariantControlVars): props is HarpKeyControlVars => {
  const hasRootPitch = (props as HarpKeyControlVars).rootPitchId !== undefined
  const hasPozition = (props as HarpKeyControlVars).pozitionId !== undefined

  return hasRootPitch && hasPozition
}
const isPozitionControlVars = (props: CovariantControlVars): props is PozitionControlVars => {
  const hasRootPitch = (props as PozitionControlVars).rootPitchId !== undefined
  const hasHarpKey = (props as PozitionControlVars).harpKeyId !== undefined

  return hasRootPitch && hasHarpKey
}
const isRootPitchControlVars = (props: CovariantControlVars): props is RootPitchControlVars => {
  const hasHarpKey = (props as RootPitchControlVars).harpKeyId !== undefined
  const hasPozition = (props as RootPitchControlVars).pozitionId !== undefined

  return hasHarpKey && hasPozition
}

const getButtonTitle = (covariantControlVars: CovariantControlVars): string => {
  if (isHarpKeyControlVars(covariantControlVars)) {
    const { pozitionId, rootPitchId } = covariantControlVars
    return `${pozitionId} ${rootPitchId}`
  } else if (isPozitionControlVars(covariantControlVars)) {
    const { harpKeyId, rootPitchId } = covariantControlVars
    return `${harpKeyId} ${rootPitchId}`
  } else if (isRootPitchControlVars(covariantControlVars)) {
    const { harpKeyId, pozitionId } = covariantControlVars
    return `${harpKeyId} ${pozitionId}`
  }

  const errorMessage = `
    Expected the covariantControlVars property to be a valid CovariantControlVar object but it wasn't.

    ${JSON.stringify(covariantControlVars)}
  `
  throw new Error(errorMessage)
}

export const CovarianceButton = (props: CovarianceButtonProps): ReactElement => {
  const { covariantControlVars } = props
  const title = getButtonTitle(covariantControlVars)

  return (
    <Button onPress={(): void => {console.log('test')}} title={title} />
  )
}
