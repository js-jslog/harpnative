import {View} from 'react-native'
import React from 'react'

import type {HarpFaceProps, DisplayModes} from '../HarpFace'
import { HarpFace } from '../HarpFace'
import { DisplayModeToggler } from '../Controls'

export const HarpGuruHome = (harpFaceProps: HarpFaceProps, setDisplayMode: (displayMode: DisplayModes) => void): React.ReactElement => {
  const displayModeTogglerProps = { setDisplayMode }
  return (
    <View>
      <HarpFace {...harpFaceProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
    </View>
  )
}
