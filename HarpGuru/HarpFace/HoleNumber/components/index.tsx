import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import type { HoleNumberProps } from '../types'

export function HoleNumber(props: HoleNumberProps): ReactElement {
  const { xCoord } = props
  const holeNumber = xCoord + 1

  const styles = StyleSheet.create({
    cell: {
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
    },
  })

  return (
    <View style={styles.cell}>
      <Text>{holeNumber}</Text>
    </View>
  )
}
