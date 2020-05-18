import {StyleSheet, View} from 'react-native'
import React from 'react'

import { NavToPozitionControl } from '../Navigation'
import type {HarpFaceProps} from '../HarpFace'
import { HarpFace } from '../HarpFace'
import { DisplayModeToggler } from '../Controls'
import type { DisplayModeTogglerProps } from '../Controls'

type HarpGuruHomeProps = HarpFaceProps & DisplayModeTogglerProps

const styles = StyleSheet.create({
  guruhome: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
})


export const HarpGuruHome = (props: HarpGuruHomeProps): React.ReactElement => {
  const { harpStrata, displayMode, setDisplayMode } = props
  const harpFaceProps = { harpStrata, displayMode }
  const displayModeTogglerProps = { setDisplayMode }
  return (
    <View style={styles.guruhome}>
      <HarpFace {...harpFaceProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
      <NavToPozitionControl />
    </View>
  )
}
