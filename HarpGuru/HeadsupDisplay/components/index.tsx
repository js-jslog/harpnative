import {View} from 'react-native'
import React from 'react'

import type { HeadsupDisplayProps } from '../types'

export const HeadsupDisplay = (props: HeadsupDisplayProps): React.ReactElement => {
  const { children } = props
  return (
    <View>
      { children }
    </View>
  )
}
