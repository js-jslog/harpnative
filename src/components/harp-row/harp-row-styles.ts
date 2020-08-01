import { StyleSheet } from 'react-native'
import type { ViewStyle } from 'react-native'
import type { HarpStrata } from 'harpstrata'

import type { Coord } from '../../types'
import { sizes, colors } from '../../styles'

import { isBlowOrDrawRow, isBlowRow, isDrawRow } from './utils'

const { 1: borderWidth, 6: borderRadius } = sizes
const { homeRowsColor, inertOutline } = colors

type Props = {
  readonly yCoord: Coord
  readonly activeHarpStrata: HarpStrata
}

type HarpRowStyles = {
  readonly row: ViewStyle
}

export const getStyles = (props: Props): HarpRowStyles => {
  const styles = StyleSheet.create<HarpRowStyles>({
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderColor: inertOutline,
      borderTopWidth: isBlowRow(props) ? borderWidth : 0,
      borderBottomWidth: isDrawRow(props) ? borderWidth : 0,
      borderRightWidth: isBlowOrDrawRow(props) ? borderWidth : 0,
      borderLeftWidth: isBlowOrDrawRow(props) ? borderWidth : 0,
      backgroundColor: isBlowOrDrawRow(props) ? homeRowsColor : 'transparent',
      borderTopLeftRadius: isBlowRow(props) ? borderRadius : 0,
      borderTopRightRadius: isBlowRow(props) ? borderRadius : 0,
      borderBottomLeftRadius: isDrawRow(props) ? borderRadius : 0,
      borderBottomRightRadius: isDrawRow(props) ? borderRadius : 0,
    },
  })

  return styles
}
