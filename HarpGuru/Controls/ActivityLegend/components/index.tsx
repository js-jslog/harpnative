import { StyleSheet, View } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { DegreeIds } from 'harpstrata'

import type { ActivityLegendProps } from '../types'
import { ActivityLegendColumn } from '../../ActivityLegendColumn'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  }
})

export const ActivityLegend = (props: ActivityLegendProps): ReactElement => {
  const { rootPitchId, activeDegreeIds, activePitchIds } = props
  const degreeActivityLegendColumnProps = { originId: DegreeIds.Root, activeIds: activeDegreeIds }
  const pitchActivityLegendColumnProps = { originId: rootPitchId, activeIds: activePitchIds }

  return (
    <View style={styles.wrapper} >
      <ActivityLegendColumn {...degreeActivityLegendColumnProps} />
      <ActivityLegendColumn {...pitchActivityLegendColumnProps} />
    </View>
  )
}
