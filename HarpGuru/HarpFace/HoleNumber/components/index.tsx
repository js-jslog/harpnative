import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import type { HoleNumbers, HoleNumberProps } from '../types'

export function HoleNumber(props: HoleNumberProps): ReactElement {
  const { xCoord } = props
  const holeNumber: HoleNumbers = `${xCoord + 1}` as HoleNumbers

  const styles = StyleSheet.create({
    cell: {
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
    },
  })

  return (
    <View style={styles.cell}>
      <Text>{holeNumber}</Text>
    </View>
  )
}
