import {StyleSheet, View} from 'react-native'
import React from 'react'

import type { ScreenProps } from '../types'
import { HarpFace } from '../../HarpFace'
import { DisplayModeToggler } from '../../Controls'

const styles = StyleSheet.create({
  guruhome: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
})


export const HomeScreen = (props: ScreenProps): React.ReactElement => {
  const { activeHarpStrata, activeDisplayMode, setActiveHarpStrata, setActiveDisplayMode } = props
  const harpFaceProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode }
  const displayModeTogglerProps = { setActiveDisplayMode }
  return (
    <View style={styles.guruhome}>
      <HarpFace {...harpFaceProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
    </View>
  )
}
