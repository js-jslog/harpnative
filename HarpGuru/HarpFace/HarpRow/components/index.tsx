import {StyleSheet, View} from 'react-native'
import React from 'react'

import type {HarpRowProps} from '../types'
import { isBlowOrDrawRow } from '../isBlowOrDrawRow'
import { getHarpCells } from '../../HarpCells'


export const HarpRow = (props: HarpRowProps): React.ReactElement => {
  const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isBlowOrDrawRow(props) ? '#ddd' : 'transparent',
    },
  })

  return (
    <View style={styles.row}>
      { getHarpCells(props) } 
    </View>
  )
}
