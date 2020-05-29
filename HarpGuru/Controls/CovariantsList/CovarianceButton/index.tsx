import { Button } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

export const CovarianceButton = (): ReactElement => {
  return (
    <Button onPress={(): void => {console.log('test')}} title={'test'} />
  )
}
