import Animated from 'react-native-reanimated'
import { Dimensions } from 'react-native'
import React from 'react'

import type { OverlayMenuContainerProps } from '../types'
import { styles } from '../../styles'

export const AnimatedMenuContainer = (props: OverlayMenuContainerProps): React.ReactElement => {
  const { children, onScreen } = props

  const { width: windowWidth } = Dimensions.get('window')

  return (
    <Animated.View
      style={[styles.overlayMenuContainer, {
        transform: [
          { translateX: (onScreen ? 0 : windowWidth * -1) }
        ],
      }]}>
      { children }
    </Animated.View>
  )
}
