import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import type { ControlPanelProps } from '../types'
import { PozitionButtons } from '../../PozitionButtons'
import type { PozitionButtonParentProps } from '../../PozitionButton'

const styles = StyleSheet.create({
  controlPanel: {
    flex: 1,
  },
})

export const ControlPanel = (props: ControlPanelProps): ReactElement => {
  const { setPozitionId } = props
  const pozitionButtonParentProps: PozitionButtonParentProps = { setPozitionId }
  return (
    <View style={styles.controlPanel}>
      <Text>Control Panel</Text>
      <PozitionButtons {...pozitionButtonParentProps} />
    </View>
  )
}
