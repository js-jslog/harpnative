import Animated from 'react-native-reanimated'
import {StyleSheet, Dimensions} from 'react-native'
import React from 'react'

import type { SweepingBannerProps } from '../types'

const styles = StyleSheet.create({
  headsupOverlay: {
    ...StyleSheet.absoluteFillObject,
  }
})

export const SweepingBanner = (props: SweepingBannerProps): React.ReactElement => {
  const { children, bannerActive } = props

  const { width: windowWidth } = Dimensions.get('window')

  return (
    <Animated.View
      style={[styles.headsupOverlay, {
        transform: [
          { translateX: (bannerActive ? 0 : windowWidth * -1) }
        ],
      }]}>
      { children }
    </Animated.View>
  )
}
