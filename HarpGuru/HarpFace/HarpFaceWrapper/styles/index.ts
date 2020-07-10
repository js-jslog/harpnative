import { StyleSheet } from 'react-native'
import type { ViewStyle } from 'react-native'

import { getHarpFaceFacts } from '../getHarpFaceFacts'
import { themeSizes } from '../../../Styles'
import type { HarpFaceProps } from '../..'

type HarpFaceStyles = {
  readonly facewrapper: ViewStyle
  readonly face: ViewStyle
}

// TODO: these sizes neem to be somewhere common between
// the face and the fragment because they are used in boths styles
const { 9: columnWidth } = themeSizes
const { 8: boundaryWidth } = themeSizes
const { 9: rowHeight } = themeSizes

export const getStyles = (props: HarpFaceProps): HarpFaceStyles => {
  const { columnCount, rowCount, boundaryIndexes } = getHarpFaceFacts(props)
  const { length: boundaryCount }  = boundaryIndexes

  const styles = StyleSheet.create({
    // Wrapper, just to fill up all the available space
    // and place the face in the center
    facewrapper: {
      ...StyleSheet.absoluteFillObject,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    // This is itself a wrapper for a series of face fragments
    face: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: (columnWidth * columnCount) + (boundaryWidth * boundaryCount),
      height: rowHeight * rowCount,
    }
  })

  return styles
}