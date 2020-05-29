import { Button } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import type { CovariantControlVars, HarpKeyControlVars, PozitionControlVars, RootPitchControlVars } from 'harpstrata'

import { CovarianceButtonProps } from './types'

export const isHarpKeyControlVars = (props: CovariantControlVars): props is HarpKeyControlVars => {
  const hasRootPitch = (props as HarpKeyControlVars).rootPitchId !== undefined
  const hasPozition = (props as HarpKeyControlVars).pozitionId !== undefined

  return hasRootPitch && hasPozition
}
export const isPozitionControlVars = (props: CovariantControlVars): props is PozitionControlVars => {
  const hasRootPitch = (props as PozitionControlVars).rootPitchId !== undefined
  const hasHarpKey = (props as PozitionControlVars).harpKeyId !== undefined

  return hasRootPitch && hasHarpKey
}
export const isRootPitchControlVars = (props: CovariantControlVars): props is RootPitchControlVars => {
  const hasHarpKey = (props as RootPitchControlVars).harpKeyId !== undefined
  const hasPozition = (props as RootPitchControlVars).pozitionId !== undefined

  return hasHarpKey && hasPozition
}

export const CovarianceButton = (props: CovarianceButtonProps): ReactElement => {
  const { covariantControlVars } = props
  if (isRootPitchControlVars(covariantControlVars)) {
    const { harpKeyId, pozitionId } = covariantControlVars
    const title = `${harpKeyId} ${pozitionId}`
    return (
      <Button onPress={(): void => {console.log('test')}} title={title} />
    )
  } else if (isHarpKeyControlVars(covariantControlVars)) {
    const { pozitionId, rootPitchId } = covariantControlVars
    const title = `${pozitionId} ${rootPitchId}`
    return (
      <Button onPress={(): void => {console.log('test')}} title={title} />
    )
  }

  throw Error ('harp key control vars not implemented yet')
}
