import { StyleSheet } from 'react-native'

import type { HarpFaceFragmentStyles } from '../types'
import { getFragmentFacts } from '../getFragmentFacts'
import type { HarpFaceFragmentProps } from '../../types'
import { themeSizes } from '../../../Styles'

const { 9: columnWidth } = themeSizes
const { 9: rowHeight } = themeSizes

export const getStyles = (props: HarpFaceFragmentProps): HarpFaceFragmentStyles => {
  const { columnCount, rowCount } = getFragmentFacts(props)

  const styles = StyleSheet.create<HarpFaceFragmentStyles>({
    fragment: {
      width: columnWidth * columnCount,
      height: rowHeight * rowCount,
    },
  })

  return styles
}
