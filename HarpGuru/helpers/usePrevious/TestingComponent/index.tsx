import { Text } from 'react-native'
import React from 'react'

import { usePrevious } from '../index'

type Props = {
  readonly value: string
}

export const TestingComponent = ({value}: Props): React.ReactElement => {
  const previousValue =  usePrevious(value)
  return (
    <>
      <Text>Current: {value}</Text>
      <Text>Previous: {previousValue}</Text>
    </>
  )
}
