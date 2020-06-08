import { View } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'

import { ActivityLegendColumn } from '../../ActivityLegendColumn'

const activeDegreeIds = [ DegreeIds.Root ]
const activePitchIds = [ PitchIds.C ]

const degreeActivityLegendColumnProps = { originId: DegreeIds.Root, activeIds: activeDegreeIds }
const pitchActivityLegendColumnProps = { originId: PitchIds.C, activeIds: activePitchIds }

export const ActivityLegend = (): ReactElement => {
  return (
    <View>
      <ActivityLegendColumn {...degreeActivityLegendColumnProps} />
      <ActivityLegendColumn {...pitchActivityLegendColumnProps} />
    </View>
  )
}
