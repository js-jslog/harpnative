import { View } from 'react-native'
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

const mapIdToElement = (itemId: DegreeIds | PitchIds, index: number): ReactElement => {
  return <ActivityLegendCell key={index} itemId={itemId} />
}

export const ActivityLegendColumn = (props: ActivityLegendColumnProps): ReactElement => {
  const idSequence = getIdSequence(props)
  const elementArray = (idSequence as ReadonlyArray<DegreeIds | PitchIds>).map(mapIdToElement)
  return (
    <View>
      { elementArray }
    </View>
  )
}
