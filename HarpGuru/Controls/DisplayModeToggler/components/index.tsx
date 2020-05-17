import { View, Button } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import { DisplayModeTogglerProps } from '../types'
import { DisplayModes } from '../../../HarpFace'

export function DisplayModeToggler(props: DisplayModeTogglerProps): ReactElement {
  const { setDisplayMode } = props
  return (
    <View accessibilityLabel='Display mode'>
      <Button accessibilityLabel={DisplayModes.Degree} onPress={(): void => setDisplayMode(DisplayModes.Degree)} title={DisplayModes.Degree} />
      <Button accessibilityLabel={DisplayModes.Pitch} onPress={(): void => setDisplayMode(DisplayModes.Pitch)} title={DisplayModes.Pitch} />
    </View>
  )
}