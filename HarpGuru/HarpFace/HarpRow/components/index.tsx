import {StyleSheet, View} from 'react-native'
import React from 'react'

import type {HarpRowProps} from '../types'
import { isBlowOrDrawRow, isBlowRow, isDrawRow } from '../isBlowOrDrawRow'
import { getHarpCells } from '../../HarpCells'


export const HarpRow = (props: HarpRowProps): React.ReactElement => {
  const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: isBlowOrDrawRow(props) ? '#ddd' : 'transparent',
      borderTopLeftRadius: isBlowRow(props) ? 12 : 0,
      borderTopRightRadius: isBlowRow(props) ? 12 : 0,
      borderBottomLeftRadius: isDrawRow(props) ? 12 : 0,
      borderBottomRightRadius: isDrawRow(props) ? 12 : 0,
    },
  })

  return (
    <View style={styles.row}>
      { getHarpCells(props) } 
    </View>
  )
}
