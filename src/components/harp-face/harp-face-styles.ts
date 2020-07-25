import { StyleSheet } from 'react-native'
import type { ViewStyle } from 'react-native'
import type { HarpStrata } from 'harpstrata'

import { getHarpFaceFacts } from '../../utils'
import { themeSizes } from '../../Theme'

type HarpFaceStyles = {
  readonly facewrapper: ViewStyle
  readonly face: ViewStyle
}

const { 7: boundaryWidth } = themeSizes
export const { 9: columnWidth } = themeSizes
export const { 9: rowHeight } = themeSizes

type Props = {
  readonly activeHarpStrata: HarpStrata
}
export const getStyles = (props: Props): HarpFaceStyles => {
  const { columnCount, rowCount, octaveColumnGroups } = getHarpFaceFacts(props)
  const { length: groupCount } = octaveColumnGroups

  const styles = StyleSheet.create({
    // Wrapper, just to fill up all the available space
    // and place the face in the center
    facewrapper: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
    // This is itself a wrapper for a series of face fragments
    face: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: columnWidth * columnCount + (boundaryWidth * groupCount + 1),
      height: rowHeight * rowCount,
    },
  })

  return styles
}
