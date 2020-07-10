import { View } from 'react-native'
import React from 'react'

import { getStyles } from '../styles'
import type { HarpFaceProps } from '../../types'
import {HarpFaceFragment} from '../../HarpFace/components'

export const HarpFace = (props: HarpFaceProps): React.ReactElement => {
  const styles = getStyles(props)
  const harpFaceFragmentProps1 = {
    ...props,
    xRange: [0, 3] as [0,3]
  }
  const harpFaceFragmentProps2 = {
    ...props,
    xRange: [3, 6] as [3,6]
  }
  const harpFaceFragmentProps3 = {
    ...props,
    xRange: [6, 9] as [6,9]
  }
  const harpFaceFragmentProps4 = {
    ...props,
    xRange: [9, 10] as [9,10]
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
