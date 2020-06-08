import {StyleSheet, View} from 'react-native'
import React from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'

import type { ScreenProps } from '../types'
import { themeColors } from '../../Styles'
import { HarpFace } from '../../HarpFace'
import { DisplayModeToggler, ActivityLegendColumn } from '../../Controls'

const { pageColor } = themeColors

const styles = StyleSheet.create({
  guruhome: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: pageColor,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
})


export const HomeScreen = (props: ScreenProps): React.ReactElement => {
  const { activeHarpStrata, activeDisplayMode, setActiveHarpStrata, setActiveDisplayMode } = props
  const harpFaceProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode }
  const displayModeTogglerProps = { setActiveDisplayMode }

  const { isActiveComplex: { activeDegreeIds, activePitchIds }} = activeHarpStrata
  const degreeActivityLegendColumnProps = { originId: DegreeIds.Root, activeIds: activeDegreeIds }
  const pitchActivityLegendColumnProps = { originId: PitchIds.C, activeIds: activePitchIds }
  return (
    <View style={styles.guruhome}>
      <HarpFace {...harpFaceProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
      <ActivityLegendColumn {...degreeActivityLegendColumnProps} />
      <ActivityLegendColumn {...pitchActivityLegendColumnProps} />
    </View>
  )
}
