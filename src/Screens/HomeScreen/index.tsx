import { StyleSheet, View } from 'react-native'
import React from 'react'

import { colors } from '../../styles'
import { HarpFace } from '../../components/harp-face'

const { pageColor } = colors

const styles = StyleSheet.create({
  guruhome: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: pageColor,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
})

export const HomeScreen = (): React.ReactElement => {
  return (
    <View style={styles.guruhome}>
      <HarpFace />
    </View>
  )
}
