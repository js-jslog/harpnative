import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import type { ControlPanelProps } from '../types'
import { PozitionButtons } from '../../PozitionButtons'
import type { PozitionButtonParentProps } from '../../PozitionButton'
import { DisplayModeToggler } from '../../DisplayModeToggler'
import type { DisplayModeTogglerProps } from '../../DisplayModeToggler'

const styles = StyleSheet.create({
  controlPanel: {
    flex: 1,
  },
})

export const ControlPanel = (props: ControlPanelProps): ReactElement => {
  const { setPozitionId, setDisplayMode } = props
  const pozitionButtonParentProps: PozitionButtonParentProps = { setPozitionId }
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  return (
    <View style={styles.controlPanel}>
      <Text>Control Panel</Text>
      <PozitionButtons {...pozitionButtonParentProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
    </View>
  )
}
