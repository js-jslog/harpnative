import { StyleSheet } from 'react-native'

import type { HoleNumberStyles } from '../types'
import { themeSizes, themeColors } from '../../../Styles'

const { 5: fontSize, 8: width } = themeSizes
const { holeNumbersColor } = themeColors

export const getStyles = (): HoleNumberStyles => {
  const styles = StyleSheet.create({
    cell: {
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height: 0,
    },
    text: {
      fontSize,
      color: holeNumbersColor,
    },
  })

  return styles
}
