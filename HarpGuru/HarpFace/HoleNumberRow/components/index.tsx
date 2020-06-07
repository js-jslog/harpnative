import {StyleSheet, View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import { getHoleNumbers } from '../getHoleNumbers'
import type { HarpFaceProps } from '../../types'

const styles = StyleSheet.create({
  row: {
    flex: 0,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 10,
  },
})

export const HoleNumberRow = (props: HarpFaceProps): ReactElement => {
  const holeNumbers = getHoleNumbers(props)

  return (
    <View style={styles.row}>
      {holeNumbers}
    </View>
  )
}
