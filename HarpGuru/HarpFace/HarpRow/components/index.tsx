import { View } from 'react-native'
import React from 'react'

import type { HarpRowProps } from '../types'
import { getStyles } from '../styles'
import { getChunkedHarpCells } from '../../HarpCells'

export const HarpRow = (props: HarpRowProps): React.ReactElement => {
  const styles = getStyles(props)
  const chunkedHarpCells = getChunkedHarpCells(props)
  const cellChunks = chunkedHarpCells.map((cellChunk, index) => (
    <View key={index} style={styles.chunkWrapper}>
      <View style={styles.cellChunk}>{cellChunk}</View>
      <View style={styles.spacer} />
    </View>
  ))

  return <View style={styles.row}>{cellChunks}</View>
}
