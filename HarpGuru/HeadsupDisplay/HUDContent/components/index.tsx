import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import {HUDContentProps} from '../types'
import { themeSizes } from '../../../Styles'

const { 7: variableSize, 8: titleSize } = themeSizes
const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: titleSize
  },
  variable: {
    fontSize: variableSize
  }
})

export const HUDContent = (props: HUDContentProps): React.ReactElement => {
  const { harpKeyId, pozitionId, rootPitchId } = props

  return (
    <View style={styles.wrapper}>
      <View style={styles.column}>
        <Text style={styles.title}>Harp Key</Text>
        <Text style={styles.variable}>{harpKeyId}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>Position</Text>
        <Text style={styles.variable}>{pozitionId}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>Pozition Key</Text>
        <Text style={styles.variable}>{rootPitchId}</Text>
      </View>
    </View>
  )
}
