import { View } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { isPitchId, getPitchIds, DegreeIds } from 'harpstrata'

import type { ActivityLegendColumnProps } from '../types'
import { ActivityLegendCell } from '../../ActivityLegendCell'

export const ActivityLegendColumn = (props: ActivityLegendColumnProps): ReactElement => {
  const { originId } = props

  if ( isPitchId(originId) ) {
    const idSequence = getPitchIds(originId)
    const elementArray = idSequence.map((pitchId, index) => {
      return <ActivityLegendCell key={index} itemId={pitchId} />
    })
    return (
      <View>
        { elementArray }
      </View>
    )
  } else {
    const idSequence = Object.values(DegreeIds)
    const elementArray = idSequence.map((pitchId, index) => {
      return <ActivityLegendCell key={index} itemId={pitchId} />
    })
    return (
      <View>
        { elementArray }
      </View>
    )
  }
}
