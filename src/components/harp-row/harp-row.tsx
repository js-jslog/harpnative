import { useGlobal } from 'reactn'
import { View } from 'react-native'
import React from 'react'

import type { Coord } from '../../types'

import { getHarpCells } from './utils'
import { getStyles } from './harp-row-styles'

type Props = {
  readonly yCoord: Coord
  readonly xRange: ReadonlyArray<number>
}

export const HarpRow = (props: Props): React.ReactElement => {
  const [activeHarpStrata] = useGlobal('activeHarpStrata')
  const styles = getStyles({ ...props, activeHarpStrata })

  return <View style={styles.row}>{getHarpCells(props)}</View>
}
