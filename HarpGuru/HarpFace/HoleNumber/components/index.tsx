import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import type { HoleNumberIds, HoleNumberProps } from '../types'

export function HoleNumber(props: HoleNumberProps): ReactElement {
  const { xCoord } = props
  const holeNumber: HoleNumberIds = `${xCoord + 1}` as HoleNumberIds

  const styles = StyleSheet.create({
    cell: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 0,
    },
    text: {
      fontSize: 10,
    },
  })

  return (
    <View style={styles.cell}>
      <Text style={styles.text}>{holeNumber}</Text>
    </View>
  )
}
