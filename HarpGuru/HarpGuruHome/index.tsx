import {View} from 'react-native'
import React from 'react'

import type {HarpFaceProps} from '../HarpFace'
import { HarpFace } from '../HarpFace'
import { DisplayModeToggler } from '../Controls'
import type { DisplayModeTogglerProps } from '../Controls'

type HarpGuruHomeProps = HarpFaceProps & DisplayModeTogglerProps


export const HarpGuruHome = (props: HarpGuruHomeProps): React.ReactElement => {
  const { harpStrata, displayMode, setDisplayMode } = props
  const harpFaceProps = { harpStrata, displayMode }
  const displayModeTogglerProps = { setDisplayMode }
  return (
    <View>
      <HarpFace {...harpFaceProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
    </View>
  )
}
