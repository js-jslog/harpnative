import { View } from 'react-native'
import React from 'react'

import type { HarpRowProps } from '../types'
import { getStyles } from '../styles'
import { getChunkedHarpCells } from '../../HarpCells'

export const HarpRow = (props: HarpRowProps): React.ReactElement => {
  const styles = getStyles(props)
  const chunkedHarpCells = getChunkedHarpCells(props)
  const cellChunks = chunkedHarpCells.map((cellChunk, index) => {
    const cellChunkStyle = (cellChunk.length === 3 ? styles.cellChunk3 : styles.cellChunk4)
    const chunkWrapperStyle = (cellChunk.length === 3 ? styles.chunkWrapper3 : styles.chunkWrapper4)
    return (
      <View key={index} style={chunkWrapperStyle}>
        <View style={cellChunkStyle}>{cellChunk}</View>
        <View style={styles.spacer} />
      </View>
    )
  })

  return <View style={styles.row}>{cellChunks}</View>
}
