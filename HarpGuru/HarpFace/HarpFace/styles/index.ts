import { StyleSheet } from 'react-native'

import type { HarpFaceStyles } from '../types'
import { getFragmentFacts } from '../getFragmentFacts'
import type { HarpFaceFragmentProps } from '../../types'
import { themeSizes } from '../../../Styles'

const { 9: columnWidth } = themeSizes
const { 9: rowHeight } = themeSizes

export const getStyles = (props: HarpFaceFragmentProps): HarpFaceStyles => {
  const { columnCount, rowCount } = getFragmentFacts(props)

  const styles = StyleSheet.create<HarpFaceStyles>({
    facewrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    face: {
      width: columnWidth * columnCount,
      height: rowHeight * rowCount,
    },
    fragment: {
      width: columnWidth * columnCount,
      height: rowHeight * rowCount,
    },
  })

  return styles
}
