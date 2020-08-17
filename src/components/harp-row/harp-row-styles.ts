import { StyleSheet } from 'react-native'
import type { ViewStyle } from 'react-native'
import type { HarpStrata } from 'harpstrata'

import type { Coord } from '../../types'
import { getSizes, colors } from '../../styles'

import { isBlowOrDrawRow, isBlowRow, isDrawRow } from './utils'

type HarpRowStyles = {
  readonly row: ViewStyle
}

const { homeRowsColor, inertOutline } = colors

export const getStyles = (
  yCoord: Coord,
  activeHarpStrata: HarpStrata
): HarpRowStyles => {
  const sizes = getSizes()
  const { 0: borderWidth, 6: borderRadius } = sizes

  const styles = StyleSheet.create<HarpRowStyles>({
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderColor: inertOutline,
      borderTopWidth: isBlowRow(yCoord, activeHarpStrata) ? borderWidth : 0,
      borderBottomWidth: isDrawRow(yCoord, activeHarpStrata) ? borderWidth : 0,
      borderRightWidth: isBlowOrDrawRow(yCoord, activeHarpStrata)
        ? borderWidth
        : 0,
      borderLeftWidth: isBlowOrDrawRow(yCoord, activeHarpStrata)
        ? borderWidth
        : 0,
      backgroundColor: isBlowOrDrawRow(yCoord, activeHarpStrata)
        ? homeRowsColor
        : 'transparent',
      borderTopLeftRadius: isBlowRow(yCoord, activeHarpStrata)
        ? borderRadius
        : 0,
      borderTopRightRadius: isBlowRow(yCoord, activeHarpStrata)
        ? borderRadius
        : 0,
      borderBottomLeftRadius: isDrawRow(yCoord, activeHarpStrata)
        ? borderRadius
        : 0,
      borderBottomRightRadius: isDrawRow(yCoord, activeHarpStrata)
        ? borderRadius
        : 0,
    },
  })

  return styles
}
