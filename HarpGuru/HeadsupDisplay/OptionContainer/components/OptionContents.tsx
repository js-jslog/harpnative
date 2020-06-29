import { StyleSheet, Text } from 'react-native'
import React from 'react'

import { themeSizes } from '../../../Styles'

const { 7: variableSize, 8: titleSize } = themeSizes

const styles = StyleSheet.create({
  title: {
    fontSize: titleSize
  },
  variable: {
    fontSize: variableSize
  }
})

type ChildProps = {
  readonly children: React.ReactNode
}

export const Title = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.title}>{children}</Text>
}
export const Variable = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.variable}>{children}</Text>
}
