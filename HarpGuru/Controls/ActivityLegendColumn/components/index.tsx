import { FlatList } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { isPitchId, getPitchIds, DegreeIds } from 'harpstrata'
import type { PitchIds } from 'harpstrata'

import type { ActivityLegendColumnProps, DegreeActivityLegendColumnProps, PitchActivityLegendColumnProps } from '../types'
import { ActivityLegendCell } from '../../ActivityLegendCell'


const getPitchColumn = (props: PitchActivityLegendColumnProps): ReactElement => {
  const { originId } = props
  const idSequence = getPitchIds(originId)

  return (
    <FlatList
      data={idSequence}
      renderItem={({ item }): ReactElement => {
        const activityLegendCellProps = { ...props, itemId: item }
        return <ActivityLegendCell  {...activityLegendCellProps} />
      }}
      keyExtractor={(item): PitchIds => item}
    />
  )
}

const getDegreeColumn = (props: DegreeActivityLegendColumnProps): ReactElement => {
  const idSequence = Object.values(DegreeIds)

  return (
    <FlatList
      data={idSequence}
      renderItem={({ item }): ReactElement => {
        const activityLegendCellProps = { ...props, itemId: item }
        return <ActivityLegendCell  {...activityLegendCellProps} />
      }}
      keyExtractor={(item): DegreeIds => item}
    />
  )
}

export const ActivityLegendColumn = (props: ActivityLegendColumnProps): ReactElement => {
  const { originId } = props
  if (isPitchId(originId)) return getPitchColumn(props as PitchActivityLegendColumnProps)
  return getDegreeColumn(props as DegreeActivityLegendColumnProps)
}
