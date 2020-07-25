import { StyleSheet, View } from 'react-native'
import React from 'react'

import { HarpFace } from '../../components/harp-face'
import { themeColors } from '../../Theme'

const { pageColor } = themeColors

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
