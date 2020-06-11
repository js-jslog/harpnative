import { PanGestureHandler } from 'react-native-gesture-handler'
import type { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { DegreeIds } from 'harpstrata'

import type { ActivityLegendProps } from '../types'
import { ActivityLegendColumn } from '../../ActivityLegendColumn'
import { DisplayModes } from '../../../HarpFace'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  }
})

export const ActivityLegend = (props: ActivityLegendProps): ReactElement => {
  const { setActiveDisplayMode, activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const { rootPitchId, isActiveComplex: { activeDegreeIds, activePitchIds }} = activeHarpStrata
  const degreeActivityLegendColumnProps = { activeHarpStrata, setActiveHarpStrata, originId: DegreeIds.Root, activeIds: activeDegreeIds, activeDisplayMode }
  const pitchActivityLegendColumnProps = { activeHarpStrata, setActiveHarpStrata, originId: rootPitchId, activeIds: activePitchIds, activeDisplayMode }

  const handleSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent): void => {
    if (nativeEvent.translationX > nativeEvent.translationY) setActiveDisplayMode(DisplayModes.Pitch)
    if (nativeEvent.translationX < nativeEvent.translationY) setActiveDisplayMode(DisplayModes.Degree)
  }

  return (
    <PanGestureHandler
      onHandlerStateChange={handleSwipe}
    >
      <View style={styles.wrapper} >
        <ActivityLegendColumn {...degreeActivityLegendColumnProps} />
        <ActivityLegendColumn {...pitchActivityLegendColumnProps} />
      </View>
    </PanGestureHandler>
  )
}
