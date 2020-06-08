import { StyleSheet } from 'react-native'
import { DegreeIds } from 'harpstrata'

import { ActivityLegendCellStyles } from '../types'
import { themeSizes, themeColors } from '../../../Styles'


const { 7: height, 7: width } = themeSizes
const { 6: fontSize } = themeSizes
const { pageColor, degreeColors, inertOutline: borderColor } = themeColors

export const getStyles = (): ActivityLegendCellStyles => {
  const isActive = true
  const { [DegreeIds.Root]: cellColor } = degreeColors

  const styles = StyleSheet.create<ActivityLegendCellStyles>({
    cell: {
      backgroundColor: cellColor,
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height,
    },
    text: {
      color: (isActive) ? pageColor : borderColor,
      fontSize,
    },
  })

  return styles
}
