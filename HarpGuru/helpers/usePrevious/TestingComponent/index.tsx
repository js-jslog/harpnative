import { Text } from 'react-native'
import React from 'react'

type Props = {
  readonly value: string
}

export const TestingComponent = ({value}: Props): React.ReactElement => {
  return (
    <Text>{value}</Text>
  )
}
