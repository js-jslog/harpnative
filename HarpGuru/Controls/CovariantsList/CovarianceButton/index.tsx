import { Button } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import type { RootPitchControlVars } from 'harpstrata'

import { CovarianceButtonProps } from './types'

export const CovarianceButton = (props: CovarianceButtonProps): ReactElement => {
  const { covariantControlVars: rootPitchControlVars } = props
  const { harpKeyId, pozitionId } = rootPitchControlVars as RootPitchControlVars 
  const title = `${harpKeyId} ${pozitionId}`
  return (
    <Button onPress={(): void => {console.log('test')}} title={title} />
  )
}
