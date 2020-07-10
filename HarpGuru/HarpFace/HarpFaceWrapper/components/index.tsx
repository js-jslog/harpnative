import { View } from 'react-native'
import React from 'react'

import { getStyles } from '../styles'
import type { HarpFaceProps } from '../../types'

export const HarpFace = (props: HarpFaceProps): React.ReactElement => {
  const styles = getStyles(props)

  return (
    <View style={styles.facewrapper}>
      <View style={styles.face}>
      </View>
    </View>
  )
}
