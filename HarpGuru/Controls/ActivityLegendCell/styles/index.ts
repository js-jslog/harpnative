import { StyleSheet } from 'react-native'

import type { ActivityLegendCellStyles, ActivityLegendCellProps } from '../types'
import { analyseLegendKey } from '../analyseLegendKey'
import { themeSizes, themeColors } from '../../../Styles'


const { 7: height, 7: width } = themeSizes
const { 6: fontSize } = themeSizes
const { pageColor, degreeColors, inertOutline } = themeColors

export const getStyles = (props: ActivityLegendCellProps): ActivityLegendCellStyles => {
  const { isActive, counterpartDegreeId } = analyseLegendKey(props)
  const { [counterpartDegreeId]: activeColor } = degreeColors

  const styles = StyleSheet.create<ActivityLegendCellStyles>({
    cell: {
      backgroundColor: (isActive) ? activeColor : pageColor,
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
