import {View} from 'react-native'
import React from 'react'

import type {HarpFaceProps, DisplayModes} from '../HarpFace'
import { HarpFace } from '../HarpFace'
import { DisplayModeToggler } from '../Controls'

export type HarpGuruHomeProps = HarpFaceProps & {
  readonly setDisplayMode: (displayMode: DisplayModes) => void;
}

export const HarpGuruHome = (props: HarpGuruHomeProps): React.ReactElement => {
  const { setDisplayMode } = props
  const { harpStrata, displayMode } = props
  const harpFaceProps = {
    harpStrata, displayMode
  }
  const displayModeTogglerProps = { setDisplayMode }
  return (
    <View>
      <HarpFace {...harpFaceProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
    </View>
  )
}
