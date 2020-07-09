import { Text } from 'react-native'
import React from 'react'

type Props = {
  readonly value: string
}

export const TestingComponent = ({value}: Props): React.ReactElement => {
  return (
    <>
      <Text>Current: {value}</Text>
      <Text>Previous: {value}</Text>
    </>
  )
}
