import { View } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import { getHoleNumbers } from './utils'
import { getStyles } from './hole-number-row-styles'

export type Props = {
  readonly xRange: ReadonlyArray<number>
}

const styles = getStyles()

export const HoleNumberRow = ({ xRange }: Props): ReactElement => {
  const holeNumbers = getHoleNumbers(xRange)

  return <View style={styles.row}>{holeNumbers}</View>
}
