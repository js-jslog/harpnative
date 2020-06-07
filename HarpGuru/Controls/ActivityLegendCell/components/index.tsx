import { Text } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import type { ActivityLegendCellProps } from '../types'

export const ActivityLegendCell = (props: ActivityLegendCellProps): ReactElement => {
  const { itemId } = props

  return (
    <Text>{itemId}</Text>
  )
}
