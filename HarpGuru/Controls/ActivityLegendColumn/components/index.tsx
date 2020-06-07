import { FlatList } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { isPitchId, getPitchIds, DegreeIds, PitchIds } from 'harpstrata'

import type { ActivityLegendColumnProps } from '../types'
import { ActivityLegendCell } from '../../ActivityLegendCell'

const getIdSequence = (props: ActivityLegendColumnProps): ReadonlyArray<DegreeIds> | ReadonlyArray<PitchIds> => {
  const { originId } = props

  if (isPitchId(originId)) {
    return getPitchIds(originId)
  } else {
    return Object.values(DegreeIds)
  }
}

export const ActivityLegendColumn = (props: ActivityLegendColumnProps): ReactElement => {
  const idSequence = getIdSequence(props)
  return (
    <FlatList
      data={idSequence as ReadonlyArray<DegreeIds | PitchIds>}
      renderItem={({ item }): ReactElement => <ActivityLegendCell itemId={item} />}
      keyExtractor={(item): string => item}
    />
  )
}
