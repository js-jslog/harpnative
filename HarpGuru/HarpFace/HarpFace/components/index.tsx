import { View } from 'react-native'
import React from 'react'

import type { HarpFaceProps } from '../types'
import { getStyles } from '../styles'
import { HarpFaceFragment } from '../../HarpFaceFragment'

export const HarpFace = (props: HarpFaceProps): React.ReactElement => {
  const styles = getStyles(props)
  const harpFaceFragmentProps1 = {
    ...props,
    xRange: [0,1,2] as [0,1,2]
  }
  const harpFaceFragmentProps2 = {
    ...props,
    xRange: [3,4,5] as [3,4,5]
  }
  const harpFaceFragmentProps3 = {
    ...props,
    xRange: [6,7,8] as [6,7,8]
  }
  const harpFaceFragmentProps4 = {
    ...props,
    xRange: [9] as [9]
  }

  return (
    <View style={styles.facewrapper}>
      <View style={styles.face}>
        <HarpFaceFragment {...harpFaceFragmentProps1} />
        <HarpFaceFragment {...harpFaceFragmentProps2} />
        <HarpFaceFragment {...harpFaceFragmentProps3} />
        <HarpFaceFragment {...harpFaceFragmentProps4} />
      </View>
    </View>
  )
}
