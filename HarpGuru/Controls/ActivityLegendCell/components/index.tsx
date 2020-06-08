import { View, Text } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import type { ActivityLegendCellProps } from '../types'
import { getStyles } from '../styles'

export const ActivityLegendCell = (props: ActivityLegendCellProps): ReactElement => {
  const { itemId } = props
  const styles = getStyles(props)

  return (
    <View style={styles.cell}>
      <Text style={styles.text}>{itemId}</Text>
    </View>
  )
}
