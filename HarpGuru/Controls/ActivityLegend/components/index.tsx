import { StyleSheet, View } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'

import { ActivityLegendColumn } from '../../ActivityLegendColumn'

const activeDegreeIds = [ DegreeIds.Root ]
const activePitchIds = [ PitchIds.C ]

const degreeActivityLegendColumnProps = { originId: DegreeIds.Root, activeIds: activeDegreeIds }
const pitchActivityLegendColumnProps = { originId: PitchIds.C, activeIds: activePitchIds }

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  }
})

export const ActivityLegend = (): ReactElement => {
  return (
    <View style={styles.wrapper} >
      <ActivityLegendColumn {...degreeActivityLegendColumnProps} />
      <ActivityLegendColumn {...pitchActivityLegendColumnProps} />
    </View>
  )
}
