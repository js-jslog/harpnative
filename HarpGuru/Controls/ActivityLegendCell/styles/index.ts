import { StyleSheet } from 'react-native'
import { DegreeIds } from 'harpstrata'

import type { ActivityLegendCellStyles, ActivityLegendCellProps } from '../types'
import { analyseLegendKey } from '../analyseLegendKey'
import { themeSizes, themeColors } from '../../../Styles'


const { 7: height, 7: width } = themeSizes
const { 6: fontSize } = themeSizes
const { pageColor, degreeColors, inertOutline } = themeColors

export const getStyles = (props: ActivityLegendCellProps): ActivityLegendCellStyles => {
  const { isActive } = analyseLegendKey(props)
  const { [DegreeIds.Root]: cellColor } = degreeColors

  const styles = StyleSheet.create<ActivityLegendCellStyles>({
    cell: {
      backgroundColor: (isActive) ? cellColor : pageColor,
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height,
    },
    text: {
      color: (isActive) ? pageColor : inertOutline,
      fontSize,
    },
  })

  return styles
}
