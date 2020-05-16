import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

const styles = StyleSheet.create({
  controlPanel: {
    flex: 1,
  },
})

export const ControlPanel = (): ReactElement => (
  <View style={styles.controlPanel}>
    <Text>Control Panel</Text>
  </View>
)
