import {PanGestureHandler, State, PanGestureHandlerStateChangeEvent} from 'react-native-gesture-handler'
import React from 'react'

import type { SwipeControlWrapperProps } from '../types'
import { DisplayModes } from '../../../HarpFace'

export const SwipeControlWrapper = (props: SwipeControlWrapperProps): React.ReactElement => {
  const { activeDisplayMode, setActiveDisplayMode } = props
  const { children } = props

  const handleGestureStateChange = ({nativeEvent}: PanGestureHandlerStateChangeEvent) => {
    if (nativeEvent.state !== State.END) return

    if (activeDisplayMode === DisplayModes.Degree) {
      setActiveDisplayMode(DisplayModes.Pitch)
      return
    }
    setActiveDisplayMode(DisplayModes.Degree)
  }

  return (
    <PanGestureHandler onHandlerStateChange={handleGestureStateChange}>
      {children}
    </PanGestureHandler>
  )
}
