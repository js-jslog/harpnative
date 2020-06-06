import {StyleSheet, View} from 'react-native'
import React from 'react'

import type {HarpFaceProps} from '../types'
import { HoleNumberRow } from '../../HoleNumberRow'
import { getHarpRows } from '../../HarpRows'
import { themeSizes } from '../../../Styles'

const { 9: columnWidth } = themeSizes
const { 9: rowHeight } = themeSizes

export const HarpFace = (props: HarpFaceProps): React.ReactElement => {
  const harpRows = getHarpRows(props)
  const styles = StyleSheet.create({
    facewrapper: {
      flex: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    face: {
      width: columnWidth * 10,
      height: rowHeight * 7,
    },
  })

  return (
    <View style={styles.facewrapper}>
      <View style={styles.face}>
        { harpRows.top }
        <HoleNumberRow {...props} />
        { harpRows.bottom }
      </View>
    </View>
  )
}
