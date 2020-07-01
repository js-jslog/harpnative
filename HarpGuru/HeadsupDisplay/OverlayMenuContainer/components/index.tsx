import Animated from 'react-native-reanimated'
import {StyleSheet, Dimensions} from 'react-native'
import React from 'react'

import type { OverlayMenuContainerProps } from '../types'

const styles = StyleSheet.create({
  headsupOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  }
})

export const OverlayMenuContainer = (props: OverlayMenuContainerProps): React.ReactElement => {
  const { children, overlayVisible } = props

  const { width: windowWidth } = Dimensions.get('window')

  return (
    <Animated.View
      style={[styles.headsupOverlay, {
        transform: [
          { translateX: (overlayVisible ? 0 : windowWidth * -1) }
        ],
      }]}>
      { children }
    </Animated.View>
  )
}
