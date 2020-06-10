import { TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { isPitchId } from 'harpstrata'

import type { ActivityLegendCellProps } from '../types'
import { getStyles } from '../styles'
import { getNewHarpStrata } from '../getNewHarpStrata'

export const ActivityLegendCell = (props: ActivityLegendCellProps): ReactElement => {
  const { itemId, setActiveHarpStrata } = props
  const styles = getStyles(props)

  const selectRootPitchIfPitch = (): void => {
    if (!isPitchId(itemId)) return
    const { activeHarpStrata, activeDisplayMode } = props
    const getHarpStrataProps = {
      activeHarpStrata, rootPitchId: itemId, activeDisplayMode
    }
    const newHarpStrata = getNewHarpStrata(getHarpStrataProps)
    setActiveHarpStrata(newHarpStrata)
  }

  return (
    <TouchableOpacity
      accessible={true}
      accessibilityRole='button'
      onPress={(): void => selectRootPitchIfPitch()}
    >
      <View style={styles.cell}>
        <Text style={styles.text}>{itemId}</Text>
      </View>
    </TouchableOpacity>
  )
}
