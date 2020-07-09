import { Text } from 'react-native'
import React from 'react'

import { usePrevious } from '../index'

type Props = {
  readonly value: string
  readonly initial: string
}

export const TestingComponent = ({value, initial}: Props): React.ReactElement => {
  const previousValue =  usePrevious(value, initial)
  return (
    <>
      <Text>Current: {value}</Text>
      <Text>Previous: {previousValue}</Text>
    </>
  )
}
