import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

import { DisplayModes } from '../HarpFace'

import { analysePosition } from './analysePosition'
import type { PositionFacts } from './analysePosition'

import {HarpCellProps} from './types'

const styles = StyleSheet.create({
  cell: {
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
})

export const HarpCell = (props: HarpCellProps): React.ReactElement => {
  const positionFacts: PositionFacts = analysePosition(props)
  const { displayMode } = props
  const { thisDegree, thisPitch } = positionFacts
  const { id: degreeId } = thisDegree || { id: undefined }
  const { id: pitchId } = thisPitch || { id: undefined }

  const displayValue = (displayMode === DisplayModes.Degree ? degreeId : pitchId)

  return (
    <View style={styles.cell}>
      <Text>{displayValue}</Text>
    </View>
  )
}

export type { YXCoord } from './types'
