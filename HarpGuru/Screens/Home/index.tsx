import {StyleSheet, View} from 'react-native'
import React from 'react'

import type { ScreenProps } from '../types'
import { NavToPozitionControl } from '../../Navigation'
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
  const { activeHarpStrata, activeDisplayMode, setActiveHarpStrata, setDisplayMode } = props
  const harpFaceProps = { harpStrata: activeHarpStrata, setActiveHarpStrata, displayMode: activeDisplayMode }
  const displayModeTogglerProps = { setDisplayMode }
  return (
    <View style={styles.guruhome}>
      <HarpFace {...harpFaceProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
      <NavToPozitionControl />
    </View>
  )
}
