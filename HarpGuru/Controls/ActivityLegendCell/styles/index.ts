import { StyleSheet } from 'react-native'
import { isPitchId } from 'harpstrata'

import type { ActivityLegendCellStyles, ActivityLegendCellProps } from '../types'
import { analyseLegendKey } from '../analyseLegendKey'
import { themeSizes, themeColors } from '../../../Styles'
import { DisplayModes } from '../../../HarpFace'


const { 7: height, 7: width } = themeSizes
const { 6: fontSize } = themeSizes
const { pageColor, degreeColors, inertOutline } = themeColors

export const getStyles = (props: ActivityLegendCellProps): ActivityLegendCellStyles => {
  const { itemId, activeDisplayMode } = props
  const { isActive, counterpartDegreeId } = analyseLegendKey(props)
  const { [counterpartDegreeId]: activeColor } = degreeColors
  const isDisplayType = (activeDisplayMode === DisplayModes.Pitch && isPitchId(itemId)) || (activeDisplayMode === DisplayModes.Degree && !isPitchId(itemId))
  const activeFontColor = (isDisplayType) ? pageColor : activeColor

  const styles = StyleSheet.create<ActivityLegendCellStyles>({
    cell: {
      backgroundColor: (isActive && isDisplayType) ? activeColor : pageColor,
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height,
    },
    text: {
      color: (isActive) ? activeFontColor : inertOutline,
      fontSize,
    },
  })

  return styles
}
